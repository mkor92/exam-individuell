import { fetchAllMovies, fetchMovieTrailer } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { displayTopMovies } from "./modules/topMovies.js";
//import { createMovieCard } from "./components/movieCard.js";

displayTopMovies();

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  console.log("index.html");
  initCarousel();
  displayTopMovies(fetchAllMovies);
  async function initCarousel() {
    const allMovies = await fetchAllMovies();
    const fiveRandomMovies = fetchMovieTrailer(allMovies, 5);

    fiveRandomMovies.forEach((movie, index) => {
      renderTrailers(movie, index + 1);
    });
  }

  addEventListener.createMovieCard;
} else if (window.location.pathname === "/favorites.html") {
  console.log("favorites.html");
} else if (window.location.pathname === "/movie.html") {
  console.log("movie.html");
} else if (window.location.pathname === "/search.html") {
  console.log("search.html");
}
