// Exemplo de listas (Você deve colocar o link DIRETO do arquivo .mp4 aqui)
const playlists = {
    video: [
        "https://raw.githubusercontent.com/Pecorine125/VideosOff/main/video%20Especial/video1.mp4",
        "https://raw.githubusercontent.com/Pecorine125/VideosOff/main/video%20Especial/video2.mp4"
    ],
    anime: [
        "https://raw.githubusercontent.com/Pecorine125/VideosOff/main/Anime%20Especial/anime1.mp4",
        "https://raw.githubusercontent.com/Pecorine125/VideosOff/main/Anime%20Especial/anime2.mp4"
    ]
};

let currentPlaylist = [];
let currentIndex = 0;
const videoElement = document.getElementById('main-video');

function openPlayer(type) {
    currentPlaylist = playlists[type];
    currentIndex = 0;
    
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('player-screen').classList.remove('hidden');
    document.getElementById('video-title').innerText = type.toUpperCase();
    
    loadVideo();
}

function loadVideo() {
    videoElement.src = currentPlaylist[currentIndex];
    videoElement.play();
}

function playVideo() { videoElement.play(); }
function pauseVideo() { videoElement.pause(); }

function changeVideo(direction) {
    currentIndex += direction;
    
    // Evita sair do limite da lista
    if (currentIndex < 0) currentIndex = currentPlaylist.length - 1;
    if (currentIndex >= currentPlaylist.length) currentIndex = 0;
    
    loadVideo();
}

function backToMenu() {
    videoElement.pause();
    document.getElementById('player-screen').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
}