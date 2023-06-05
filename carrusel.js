const carrusel = document.getElementById('carousel');
const imagenes = carrusel.getElementsByTagName('img');
let indiceActual = 0;

function mostrarImagen() {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].classList.remove('active');
  }
  imagenes[indiceActual].classList.add('active');
}

function nextImage() {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  mostrarImagen();
}

function prevImage() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  mostrarImagen();
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

mostrarImagen();