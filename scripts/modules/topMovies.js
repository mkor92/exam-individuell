export async function displayTopMovies(fetchTopMovies) {
  try {
    const movies = await fetchTopMovies();
    const top20 = movies.slice(0, 20); // adjust if needed

    const container = document.getElementById("cardContainer");

    top20.forEach((movie) => {
      const card = createMovieCard(movie);
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load movies:", error);
  }
  console.log("Rendering movies:", top20);
}
