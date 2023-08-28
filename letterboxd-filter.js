// Create a DOMParser instance
const parser = new DOMParser();

// Main function
async function run() {
  const startingYear = parseInt(document.getElementById("startingYear").value);
  const endingYear = parseInt(document.getElementById("endingYear").value);

  const yearNumbers = Array.from(
    { length: endingYear - startingYear + 1 },
    (_, i) => {
      return startingYear + i;
    }
  );

  const runButton = document.getElementById("runButton");
  const runButtonParent = runButton.parentElement;
  runButtonParent.removeChild(runButton);

  const newDiv = document.createElement("div");
  newDiv.innerText = "Script running, please wait...";
  runButtonParent.appendChild(newDiv);

  let allRankings = [];

  for (const year of yearNumbers) {
    const rankings = await fetchYearRankings(year);
    allRankings.push(rankings);
  }

  console.log({ allRankings });
  console.log({ movieList: allRankings.flatMap((year) => year.rankings) });
  console.log(
    "Copy the movieList object value above and parse it to a CSV in https://www.convertcsv.com/json-to-csv.htm, and then go to the Letterboxd list and import the CSV there"
  );

  newDiv.innerText =
    "Rankings fetched successfully! Open the console to see the logs.";
}

// Fetch rankings for a specific year
async function fetchYearRankings(year) {
  const numberOfMoviesPerYear = parseInt(
    document.getElementById("numberOfMoviesPerYear").value
  );
  const minimumViews = parseInt(document.getElementById("minimumViews").value);
  const minimumRunTime = parseInt(
    document.getElementById("minimumRunTime").value
  );
  const maximumRunTime = parseInt(
    document.getElementById("maximumRunTime").value
  );

  const specificYearRankingsValid = [];
  const specificYearRankingsInvalid = [];
  let currentPage = 1;
  while (true) {
    const yearUrl = `https://letterboxd.com/films/ajax/popular/year/${year}/page/${currentPage}/?esiAllowFilters=true`;
    const yearUrlResponse = await fetch(yearUrl);
    const yearUrlHtml = await yearUrlResponse.text();
    const yearUrlDoc = parser.parseFromString(yearUrlHtml, "text/html");

    // Select movie elements and limit the number of movies to compare
    const elements = [...yearUrlDoc.querySelectorAll(".film-poster")];

    if (!elements.length) {
      break;
    }

    const fetchPromises = elements.map((element) =>
      fetchMovieInfo(element, year).catch((error) => {
        console.error(
          `Error fetching movie info for ${element.getAttribute(
            "data-film-slug"
          )}:`,
          error
        );
        return null; // Return null to indicate the error
      })
    );

    const results = await Promise.all(fetchPromises);
    for (const movieTotalViews of results) {
      if (movieTotalViews === null) {
        // Skip movies with errors
        continue;
      }

      if (movieTotalViews.watches >= minimumViews) {
        specificYearRankingsValid.push(movieTotalViews);
      } else {
        specificYearRankingsInvalid.push(movieTotalViews);
      }
    }

    if (specificYearRankingsInvalid.length > 15) {
      break;
    }

    currentPage++;
  }

  // Get the selected sorting option
  const sortingOption = document.getElementById("sortingOption").value;

  const filteredRankings = specificYearRankingsValid.filter(
    (movie) =>
      movie.runTime >= minimumRunTime && movie.runTime <= maximumRunTime
  );

  let sortedMovies;
  if (sortingOption === "rating") {
    sortedMovies = filteredRankings.sort((a, b) => b.rating - a.rating);
  } else if (sortingOption === "views") {
    sortedMovies = filteredRankings.sort((a, b) => b.watches - a.watches);
  } else if (sortingOption === "fans") {
    sortedMovies = filteredRankings.sort((a, b) => b.fansCount - a.fansCount);
  }

  return {
    year,
    rankings: sortedMovies.slice(0, numberOfMoviesPerYear)
  };
}

// Fetch movie information
async function fetchMovieInfo(element, year) {
  let LetterboxdURI = `https://letterboxd.com/film/${element.getAttribute(
    "data-film-slug"
  )}`;
  const id = element.getAttribute("data-film-id");
  const Title = element.querySelector("[alt]").getAttribute("alt");
  let imdbID = "";
  let tmdbID = "";

  const movieResponse = await fetch(LetterboxdURI);
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

  const footerTags = movieDoc
    .querySelector(".text-footer")
    .querySelectorAll("a");

  // Extract IMDB and TMDB IDs from footer links
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

  const statsResponse = await fetch(
    `https://letterboxd.com/esi/film/${element.getAttribute(
      "data-film-slug"
    )}/stats`
  );
  const statsHtml = await statsResponse.text();
  const statsDoc = parser.parseFromString(statsHtml, "text/html");

  // Extract watch count from movie stats
  let title = statsDoc.querySelector(".filmstat-watches [title]").title;
  const watches = parseInt(title.match(/[\d,]+/)[0].replace(/,/g, ""));

  title = statsDoc.querySelector(".filmstat-likes [title]").title;
  const likes = parseInt(title.match(/[\d,]+/)[0].replace(/,/g, ""));

  const fansResponse = await fetch(
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

  return {
    LetterboxdURI,
    Title,
    id,
    year,
    imdbID,
    tmdbID,
    rating,
    watches,
    likes,
    fansCount,
    runTime
  };
}
