const boton = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");

boton.addEventListener("click", () => {
  nav.classList.toggle("is-active");
});

let gallery = [
  "media/imagen1.webp",
  "media/imagen2.webp",
  "media/imagen3.webp",
  "media/imagen4.webp",
];

let imageIndex = 0;

let imageInterval;

const intervalTime = 3000;

const imageRotative = document.getElementById("imagen-rotativa");

function changeImage() {
  imageRotative.style.opacity = "0";
  setTimeout(() => {
    imageIndex++;
    if (imageIndex >= gallery.length) {
      imageIndex = 0;
    }

    imageRotative.src = gallery[imageIndex];
    imageRotative.style.opacity = "1";
  }, 300);
}

function activeInterval() {
  imageInterval = setInterval(() => {
    changeImage();
  }, intervalTime);
}

function stopInterval() {
  clearInterval(imageInterval);
}

imageRotative.addEventListener("mouseenter", stopInterval);
imageRotative.addEventListener("mouseleave", activeInterval);
activeInterval();

let index = 0;

function move(direction) {
  const track = document.getElementById("track");
  const viewport = document.querySelector(".featured__viewport");
  const cards = document.querySelectorAll(".card");

  let visible = window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;

  const total = cards.length;

  index += direction;
  if (index < 0) index = 0;
  if (index > total - visible) index = total - visible;

  const cardWidth = viewport.clientWidth / visible;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

window.addEventListener("resize", () => {
  index = 0;
  move(0);
});

window.addEventListener("load", () => move(0));
