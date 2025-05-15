import { fetchAllMovies } from "./api.js";

export async function displayTopMovies() {
  try {
    const movies = await fetchAllMovies();
    const top20 = movies.slice(0, 20);

    const container = document.getElementById("cardContainer");
    if (!container) {
      console.error("cardContainer not found in DOM");
      return;
    }

    container.innerHTML = "";

    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movie-card";

      card.innerHTML = `
      <h3 class="movie-title">${movie.Title}</h3>
        <img src="${movie.Poster}" alt="${movie.Title}" />
       
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load movies:", error);
  }
}
