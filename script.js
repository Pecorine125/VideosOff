// Base da URL do repositório (mantendo os caminhos exatos do GitHub)
const BASE_URL = "https://raw.githubusercontent.com/Pecorine125/VideosOff/main/video%20Especial/";

let currentNumber = 1;

// Elementos HTML
const videoElement = document.getElementById('main-video');
const titleElement = document.getElementById('video-title');

const btnBack = document.getElementById('btn-back');
const btnPause = document.getElementById('btn-pause');
const btnPlay = document.getElementById('btn-play');
const btnNext = document.getElementById('btn-next');
const btnClose = document.getElementById('btn-close');

// Gera a URL formatando o nome exato do arquivo no GitHub
function getVideoUrl(number) {
    // CERTIFIQUE-SE: Se no GitHub estiver sem acento (Video), ajuste o texto abaixo
    const fileName = `Video Especial ${number}.mp4`; 
    return `${BASE_URL}${encodeURIComponent(fileName)}`;
}

// Carrega o vídeo na tela
function loadVideo(number, autoPlay = false) {
    currentNumber = number;
    const fileName = `Video Especial ${currentNumber}.mp4`;
    
    if (titleElement) titleElement.innerText = fileName;
    videoElement.src = getVideoUrl(currentNumber);
    
    if (autoPlay) {
        videoElement.play().catch(err => console.warn("Autoplay bloqueado pelo navegador:", err));
    }
}

// Alterna entre o vídeo anterior e o próximo
function changeNumber(direction) {
    let nextNumber = currentNumber + direction;

    if (nextNumber < 1) {
        nextNumber = 1; // Não avança para números menores que 1
    }

    loadVideo(nextNumber, true);
}

// Tratamento caso o vídeo do GitHub não exista (Fim da lista ou link quebrado)
videoElement.addEventListener('error', () => {
    // Evita um loop infinito se o vídeo 1 também falhar
    if (currentNumber !== 1) {
        alert(`O vídeo "Video Especial ${currentNumber}.mp4" não foi encontrado. Voltando ao vídeo 1.`);
        loadVideo(1, false);
    }
});

// Ações dos Botões
btnPlay.addEventListener('click', () => videoElement.play());
btnPause.addEventListener('click', () => videoElement.pause()); // Apenas pausa

btnBack.addEventListener('click', () => changeNumber(-1));
btnNext.addEventListener('click', () => changeNumber(1));

btnClose.addEventListener('click', () => {
    window.close();
    setTimeout(() => {
        alert("Seu navegador bloqueou o fechamento automático. Por favor, feche a aba manualmente.");
    }, 300);
});

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadVideo(1, false);
});