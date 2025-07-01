const emails = [
  "harahelguilherme@gmail.com",
  "programadorjunior25@gmail.com",
  "harahellima@gmail.com"
];
const senhas = [
  "@Aquamarine2023*",
  "@Rubyhoshino2023*",
  "@AiYoshino2023*",
  "@Pecopeco17*",
  "@HAra25082003*"
];

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("msg");

  if (emails.includes(email) && senhas.includes(senha)) {
    window.location.href = "Videos.html";
  } else {
    msg.textContent = "Email ou senha incorretos!";
  }
}
