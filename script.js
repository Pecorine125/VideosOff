// Base da URL do repositório
const BASE_URL = "https://raw.githubusercontent.com/Pecorine125/VideosOff/main/video Especial/";

let currentNumber = 1;

// Elementos HTML
const videoElement = document.getElementById('main-video');
const titleElement = document.getElementById('video-title');

const btnBack = document.getElementById('btn-back');
const btnPause = document.getElementById('btn-pause');
const btnPlay = document.getElementById('btn-play');
const btnNext = document.getElementById('btn-next');
const btnClose = document.getElementById('btn-close');

// Função para gerar o link do vídeo de acordo com o número
function getVideoUrl(number) {
    const fileName = encodeURIComponent(`Vídeo Especial ${number}.mp4`);
    return `${BASE_URL}${fileName}`;
}

// Carrega o vídeo sem dar Play automático
function loadVideo(number, autoPlay = false) {
    currentNumber = number;
    const fileName = `Video Especial ${currentNumber}.mp4`;
    
    titleElement.innerText = fileName;
    videoElement.src = getVideoUrl(currentNumber);
    
    if (autoPlay) {
        videoElement.play().catch(err => console.warn("Erro ao reproduzir:", err));
    }
}

// Lógica de avanço/recuo de número
function changeNumber(direction) {
    let nextNumber = currentNumber + direction;

    if (nextNumber < 1) {
        nextNumber = 1; // Não permite ir abaixo de 1
    }

    loadVideo(nextNumber, true);
}

// Tratamento caso o vídeo do GitHub não exista (fim da lista)
videoElement.addEventListener('error', () => {
    alert(`O vídeo "Vídeo Especial ${currentNumber}.mp4" não foi encontrado. Voltando ao vídeo 1.`);
    loadVideo(1, false);
});

// Ações dos Botões

// Play: inicia o vídeo
btnPlay.addEventListener('click', () => {
    videoElement.play();
});

// Pause: se estiver pausado, continua. Se estiver rodando, pausa.
btnPause.addEventListener('click', () => {
    if (videoElement.paused) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
});

btnBack.addEventListener('click', () => changeNumber(-1));
btnNext.addEventListener('click', () => changeNumber(1));

btnClose.addEventListener('click', () => {
    window.close();
    setTimeout(() => {
        alert("Seu navegador bloqueou o fechamento automático. Por favor, feche a aba manualmente.");
    }, 300);
});

// Inicialização: carrega o "Vídeo Especial 1.mp4" mas não toca automaticamente
document.addEventListener('DOMContentLoaded', () => {
    loadVideo(1, false);
});
