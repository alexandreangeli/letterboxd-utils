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
    try {
      const rankings = await fetchYearRankingsWithRetry(year);
      allRankings.push(rankings);
    } catch (error) {
      console.error(`Error fetching rankings for year ${year}.`);
    }
  }

  console.log({ allRankings });
  console.log({ movieList: allRankings.flatMap((year) => year.rankings) });
  console.log(
    "Copy the movieList object value above and parse it to a CSV in https://www.convertcsv.com/json-to-csv.htm, and then go to the Letterboxd list and import the CSV there"
  );

  newDiv.innerText =
    "Rankings fetched successfully! Open the console to see the logs.";
}

// Fetch rankings for a specific year with retry logic
async function fetchYearRankingsWithRetry(year) {
  const maxRetries = parseInt(document.getElementById("maxRetries").value);
  const retryDelay = parseInt(document.getElementById("retryDelay").value);

  let retries = 0;
  while (retries < maxRetries) {
    try {
      return await fetchYearRankings(year);
    } catch (error) {
      console.error(`Error fetching rankings for year ${year}. Retrying...`);
      await delay(retryDelay);
      retries++;
    }
  }
  console.error(`Exceeded maximum retries for year ${year}. Skipping...`);
  throw new Error(`Exceeded maximum retries for year ${year}.`); // Throw an error to indicate request failure
}

// Fetch rankings for a specific year
async function fetchYearRankings(year) {
  const numberOfMoviesPerYear = parseInt(
    document.getElementById("numberOfMoviesPerYear").value
  );
  const numberOfMoviesToComparePerYear = parseInt(
    document.getElementById("numberOfMoviesToComparePerYear").value
  );
  const minimumViews = parseInt(document.getElementById("minimumViews").value);
  const minimumRunTime = parseInt(
    document.getElementById("minimumRunTime").value
  );
  const maximumRunTime = parseInt(
    document.getElementById("maximumRunTime").value
  );

  const yearUrl = `https://letterboxd.com/films/ajax/popular/year/${year}/?esiAllowFilters=true`;
  const yearUrlResponse = await fetch(yearUrl);
  const yearUrlHtml = await yearUrlResponse.text();
  const yearUrlDoc = parser.parseFromString(yearUrlHtml, "text/html");

  // Select movie elements and limit the number of movies to compare
  const elements = [...yearUrlDoc.querySelectorAll(".film-poster")].slice(
    0,
    numberOfMoviesToComparePerYear
  );

  const specificYearRankings = [];
  const fetchPromises = elements.map((element) =>
    fetchMovieInfoWithRetry(element, year)
  );

  const results = await Promise.all(fetchPromises);
  for (const movieTotalViews of results) {
    if (
      movieTotalViews.watches >= minimumViews &&
      movieTotalViews.runTime >= minimumRunTime &&
      movieTotalViews.runTime <= maximumRunTime
    ) {
      specificYearRankings.push(movieTotalViews);
    }
  }

  // Sort movies by watch count and select the top movies
  const topMovies = specificYearRankings
    .sort((a, b) => b.watches - a.watches)
    .slice(0, numberOfMoviesPerYear);

  return {
    year,
    rankings: topMovies
  };
}

// Fetch movie information with retry logic
async function fetchMovieInfoWithRetry(element, year) {
  const maxRetries = parseInt(document.getElementById("maxRetries").value);
  const retryDelay = parseInt(document.getElementById("retryDelay").value);

  let retries = 0;
  while (retries < maxRetries) {
    try {
      return await fetchMovieInfo(element, year);
    } catch (error) {
      console.error(`Error fetching movie info for year ${year}. Retrying...`);
      await delay(retryDelay);
      retries++;
    }
  }
  console.error(`Exceeded maximum retries for year ${year}. Skipping...`);
  throw new Error(`Exceeded maximum retries for year ${year}.`); // Throw an error to indicate request failure
}

// Fetch movie information
async function fetchMovieInfo(element, year) {
  let LetterboxdURI = `https://letterboxd.com${element.getAttribute(
    "data-film-slug"
  )}`;
  const id = element.getAttribute("data-film-id");
  const Title = element.querySelector("[alt]").getAttribute("alt");
  let imdbID = "";
  let tmdbID = "";

  const movieResponse = await fetch(LetterboxdURI);
  const movieHtml = await movieResponse.text();
  const movieDoc = parser.parseFromString(movieHtml, "text/html");
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
    `https://letterboxd.com/esi${element.getAttribute("data-film-slug")}stats`
  );
  const statsHtml = await statsResponse.text();
  const statsDoc = parser.parseFromString(statsHtml, "text/html");
  const { title } = statsDoc.querySelector(".filmstat-watches [title]");

  // Extract watch count from movie stats
  const watches = parseInt(title.match(/[\d,]+/)[0].replace(/,/g, ""));
  return { LetterboxdURI, Title, id, year, imdbID, tmdbID, watches, runTime };
}

// Helper function to delay execution
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
