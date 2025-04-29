export async function fetchTopMovies() {
  const response = await fetch(
    "https://santosnr6.github.io/Data/favoritemovies.json"
  );
  const movies = await response.json();
  console.log(movies);
  return movies;
}

export function getRandomMovies(movieList, numberOfMovies = 5) {
  const shuffled = [...movieList].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfMovies);
}
