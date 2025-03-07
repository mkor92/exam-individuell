export default function renderFiveTrailers(trailer) {
  const trailerElement = document.createElement("div");
  trailerElement.className = "trailer";
  trailerElement.innerHTML = `
                <iframe width="560" height="315" src=´${trailer.Trailer_link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>${trailer.title}</h3>
        `;
  document.querySelector(".trailers").appendChild(trailerElement);
}
