const parser = new DOMParser();

async function run() {
  const listUrl = document.getElementById("listUrl").value;

  const sortingOption = document.getElementById("sortingOption").value;

  const runButton = document.getElementById("runButton");
  const runButtonParent = runButton.parentElement;
  runButtonParent.removeChild(runButton);

  const progressText = document.getElementById("progressText");
  progressText.innerText = "Script running, please wait...";

  const rankings = await fetchListRankings(listUrl);
  const sortedMovieList = sortMovieList(rankings, sortingOption);

  console.log({ movieList: sortedMovieList });
  console.log(
    "Copy the movieList object value above and parse it to a CSV in https://www.convertcsv.com/json-to-csv.htm, and then go to the Letterboxd list and import the CSV there"
  );

  progressText.innerText =
    "Rankings fetched successfully! Open the console to see the logs.";
}

async function fetchListRankings(listUrl) {
  let currentPage = 1;
  const rankings = [];

  while (true) {
    const pageUrl = `${listUrl}/page/${currentPage}/`;

    const pageResponse = await fetchDataWithRetry(pageUrl);
    const pageHtml = await pageResponse.text();
    const pageDoc = parser.parseFromString(pageHtml, "text/html");

    const elements = [...pageDoc.querySelectorAll(".film-poster")];

    if (elements.length === 0) {
      break; // No more pages
    }

    for (const element of elements) {
      const movieTotalViews = await fetchMovieInfo(element);
      delay(50);
      if (movieTotalViews === null) {
        // Skip movies with errors
        continue;
      }

      rankings.push(movieTotalViews);
    }

    currentPage++;
  }

  return rankings;
}

async function fetchMovieInfo(element) {
  const filmSlug = element.getAttribute("data-film-slug");

  let LetterboxdURI = `https://letterboxd.com/film/${filmSlug}`;
  const id = element.getAttribute("data-film-id");
  const Title = element.querySelector("[alt]").getAttribute("alt");
  let imdbID = "";
  let tmdbID = "";

  const movieResponse = await fetchDataWithRetry(LetterboxdURI);
  const movieHtml = await movieResponse.text();
  const movieDoc = parser.parseFromString(movieHtml, "text/html");

  let rating = 0;
  try {
    rating = parseFloat(
      movieDoc
        .querySelector('meta[name="twitter:data2"]')
        .getAttribute("content")
        .match(/\d+\.\d+/)[0]
    );
  } catch {}

  let genres = [];
  try {
    genres = Array.from(
      movieDoc.querySelectorAll("#tab-genres .text-sluglist a.text-slug")
    ).map((link) => link.textContent.trim());
  } catch {}

  const footerTags = movieDoc
    .querySelector(".text-footer")
    .querySelectorAll("a");

  imdbID = footerTags[0]
    .getAttribute("href")
    .replace("http://www.imdb.com/title/", "")
    .replace("/maindetails", "");
  tmdbID = footerTags[1]
    .getAttribute("href")
    .replace("https://www.themoviedb.org/movie/", "")
    .replace("/", "");

  let runTime = undefined;
  const runtimeRegex = /var filmData = {[^}]+runTime: (\d+)/;
  const match = movieHtml.match(runtimeRegex);

  if (match && match[1]) {
    runTime = parseInt(match[1]);
  }

  const statsResponse = await fetchDataWithRetry(
    `https://letterboxd.com/csi/film/${element.getAttribute(
      "data-film-slug"
    )}/stats`
  );
  const statsHtml = await statsResponse.text();
  const statsDoc = parser.parseFromString(statsHtml, "text/html");

  let title = statsDoc.querySelector(".filmstat-watches [title]").title;
  const watches = parseInt(title.match(/[\d,]+/)[0].replace(/,/g, ""));

  title = statsDoc.querySelector(".filmstat-likes [title]").title;
  const likes = parseInt(title.match(/[\d,]+/)[0].replace(/,/g, ""));

  const fansResponse = await fetchDataWithRetry(
    `https://letterboxd.com/film/${element.getAttribute(
      "data-film-slug"
    )}/fans/`
  );
  const fansHtml = await fansResponse.text();
  const fansDoc = parser.parseFromString(fansHtml, "text/html");
  let fansCount = 0;
  try {
    fansCount = parseInt(
      fansDoc
        .querySelector(".js-route-fans a.tooltip")
        .getAttribute("title")
        .match(/(\d|,)+/)[0]
        .replace(/,/g, "")
    );
  } catch {}

  let percentageFansFromWatches = 0;
  if (watches) percentageFansFromWatches = fansCount / watches;

  return {
    LetterboxdURI,
    Title,
    id,
    imdbID,
    tmdbID,
    rating,
    watches,
    likes,
    fansCount,
    percentageFansFromWatches,
    runTime,
    genres
  };
}

function sortMovieList(movieList, sortingOption) {
  const sortingFunctions = {
    rating: (a, b) => b.rating - a.rating,
    views: (a, b) => b.watches - a.watches,
    fans: (a, b) => b.fansCount - a.fansCount,
    fansRatio: (a, b) =>
      b.percentageFansFromWatches - a.percentageFansFromWatches
  };

  return movieList.sort(
    sortingFunctions[sortingOption] || sortingFunctions.rating
  );
}

async function fetchDataWithRetry(url) {
  const maxRetries = 5;
  let currentRetry = 0;

  while (currentRetry < maxRetries) {
    try {
      const response = await fetch(url);
      // Check if the response was successful (status code 2xx)
      if (response.ok) {
        return response;
      }
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
    }

    // Increment the retry counter
    currentRetry++;

    // Wait for some time before retrying (you may adjust the delay as needed)
    await delay(1000);
  }

  // If all retries fail, handle the error accordingly
  console.error(`Failed to fetch data after ${maxRetries} retries from ${url}`);
}

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
