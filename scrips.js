const $carrusel = document.querySelector(".carrusel");
const $animacion = document.querySelectorAll(".producto1");
$carrusel.addEventListener("mouseenter", () => {
  console.log($animacion);
  for (i of $animacion) {
    i.classList.add("stop");
  }
});

$carrusel.addEventListener("mouseleave", () => {
  console.log($animacion);
  for (i of $animacion) {
    i.classList.remove("stop");
  }
});
