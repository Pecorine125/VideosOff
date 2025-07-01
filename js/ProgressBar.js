let progress = document.getElementById("progress");
let percentText = document.getElementById("percent");
let percent = 0;

let interval = setInterval(() => {
  if (percent >= 100) {
    clearInterval(interval);
    window.location.href = "Login.html";
  } else {
    percent++;
    progress.style.width = percent + "%";
    percentText.textContent = percent + "%";
  }
}, 30);
