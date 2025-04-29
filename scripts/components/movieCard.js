function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
      <a href="${movie.Trailer}" target="_blank">Watch Trailer</a>
    `;

  return card;
}
