let video = document.getElementById("video");
let categoria = document.getElementById("categoria");
let index = 1;
let maxVideos = 5;

function carregarCategoria() {
  index = 1;
  carregarVideo();
}

function carregarVideo() {
  let pasta = categoria.value === "Animes Especial" ? "Animes Especial" : "Video Especial";
  let nome = categoria.value === "Animes Especial" ? "Anime" : "Video Especial";
  video.src = `../src/${pasta}/${nome} ${index}.mp4`;
  video.load();
}

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function nextVideo() {
  index++;
  carregarVideo();
}

function prevVideo() {
  if (index > 1) {
    index--;
    carregarVideo();
  }
}

function closeApp() {
  window.close();
}

window.onload = carregarVideo;
