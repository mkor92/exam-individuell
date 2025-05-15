async function fetchAllMovies() {
  const response = await fetch(
    "https://santosnr6.github.io/Data/favoritemovies.json"
  );
  const movies = await response.json();

  return movies;
}

function fetchMovieTrailer(movieList, numberOfMovies = 5) {
  const shuffled = [...movieList].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfMovies);
}

export { fetchAllMovies, fetchMovieTrailer };
