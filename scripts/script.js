import { fetchTopMovies, getRandomMovies } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { displayTopMovies } from "./modules/topMovies.js";
//import { displayTopMovies } from "./modules/topMovies.js";

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  console.log("index.html");
} else if (window.location.pathname === "/favorites.html") {
  console.log("favorites.html");
} else if (window.location.pathname === "/movie.html") {
  console.log("movie.html");
} else if (window.location.pathname === "/search.html") {
  console.log("search.html");
}

async function initCarousel() {
  const allMovies = await fetchTopMovies();
  const fiveRandomMovies = getRandomMovies(allMovies, 5);

  fiveRandomMovies.forEach((movie, index) => {
    renderTrailers(movie, index + 1);
  });
}

initCarousel();
displayTopMovies(fetchTopMovies());
