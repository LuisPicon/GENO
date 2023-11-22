const $carrusel = document.querySelectorAll(".carrusel-imagenes img");
const $cardVideos = document.querySelectorAll(".chimuzero");
const $cheked = document.querySelectorAll(".btns input");
let i = 0;
let j = 0;
let m = 0;
const $menuMAs = document.querySelector(".menu-mas");

function intervalo2(elementos) {
  setInterval(() => {
    if (i === 2) {
      elementos[i].classList.remove("activa");
      $cheked[m].checked = false;

      i = 0;
      m = 0;
      elementos[i].classList.add("activa");
      $cheked[m].checked = true;
    } else {
      elementos[i].classList.remove("activa");
      elementos[i + 1].classList.add("activa");
      i++;
      $cheked[m].checked = false;
      $cheked[m + 1].checked = true;
      m++;
    }
  }, 10000);
}

function intervalo1() {
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
  }, 10000);
}
function arrancar() {
  intervalo1();
  intervalo2($carrusel);
}
arrancar();
function deter() {
  clearInterval(intervalo1);
  clearInterval(intervalo2);
}

document.addEventListener("click", (e) => {
  const evento = e.target;
  console.log(evento);
  console.log(evento);
  if (evento.classList.contains("mas")) {
    $menuMAs.classList.toggle("mas-activo");
  }
  if (evento.classList.contains("blanco2")) {
    $menuMAs.classList.toggle("mas-activo");
  }
  if (evento.classList.contains("radio") && evento.value != m) {
    $carrusel[evento.value].classList.add("activa");
    $carrusel[i].classList.remove("activa");

    $cardVideos[evento.value].classList.add("activa");
    $cardVideos[j].classList.remove("activa");

    $cheked[evento.value].checked = true;
    $cheked[m].checked = false;

    i = parseInt(evento.value);
    j = parseInt(evento.value);
    m = parseInt(evento.value);
  }
});
// Deshabilitar el zoom táctil
function deshabilitarZoomTactil() {
  var viewport = document.querySelector('meta[name="viewport"]');

  if (viewport) {
    viewport.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
  }
}

// Llamar a la función cuando se carga la página
window.onload = deshabilitarZoomTactil;
