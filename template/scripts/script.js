import { fetchTopMovies } from "./modules/api.js";
import renderFiveTrailers from "./utils/domUtils.js";
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
fetchTopMovies().then((movies) => {
  console.log(movies);
  movies.forEach((movie) => {
    renderFiveTrailers(movie);
  });
});
