const $carrusel = document.querySelectorAll(".carrusel-imagenes img");
const $cardVideos = document.querySelectorAll(".chimuzero");
let i = 0;
let j = 0;
function siguente(elementos) {
  if (i === 2) {
    elementos[i].classList.remove("activa");
    i = 0;
    elementos[i].classList.add("activa");
  } else {
    elementos[i].classList.remove("activa");
    elementos[i + 1].classList.add("activa");
    i++;
  }
}
setInterval(() => {
  if (j === 2) {
    $cardVideos[j].classList.remove("activa");
    j = 0;
    $cardVideos[j].classList.add("activa");
  } else {
    $cardVideos[j].classList.remove("activa");
    $cardVideos[j + 1].classList.add("activa");
    j++;
  }
}, 6000);

setInterval(() => {
  siguente($carrusel);
}, 6000);
//carrusel videos
/*
setInterval(() => {
  if (j === 2) {
    $carruselVideos[j].classList.remove("ver-video");
    //pocicion
    $p[j].classList.remove("video-activo");

    j = 0;
    $carruselVideos[j].classList.add("ver-video");
    //pocicion
    $p[j].classList.add("video-activo");
  } else {
    $carruselVideos[j].classList.remove("ver-video");
    $carruselVideos[j + 1].classList.add("ver-video");
    //pocicion
    $p[j].classList.remove("video-activo");
    $p[j + 1].classList.add("video-activo");

    j++;
  }
}, 5000);
*/
