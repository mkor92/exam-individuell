/*export async function createMovieCard(fetch) {
  const container = document.getElementById("cardContainer");
  const movies = await fetchAllMovies();

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}" />
      <h3 class="movie-title">${movie.Title}</h3>
      <a class="movie-trailer" href="${movie.Trailer}" target="_blank">Watch Trailer</a>
    `;

    container.appendChild(card);
  });
}*/
/*export function createMovieCard(movies) {
  const container = document.getElementById("cardContainer");

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}" />
      <h3 class=movie.title>${movie.Title}</h3>
      <a class="movie.trailer"href="${movie.Trailer}" target="_blank">Watch Trailer</a>
    `;

    container.appendChild(card);
  });
}

/*top20.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
    <img src="${movie.Poster}" alt="${movie.Title}" />
    <h3 class=movie.title>${movie.Title}</h3>
    <a class="movie.trailer"href="${movie.Trailer}" target="_blank">Watch Trailer</a>
  `;

  container.appendChild(card);
});*/

/*const card = document.createElement("div");
card.className = "movie-card";

card.innerHTML = `
    <img src="${movie.Poster}" alt="${movie.Title}" />
    <h3 class=movie-title>${movie.Title}</h3>
    <a href="${movie.Name}" target="_blank">Watch Trailer</a>
  `;

return card;*/
