const body = document.querySelector("body");
const content = document.querySelector(".content")
const avatar = document.querySelector(".avatar");
const balao_fala = document.querySelector(".balao_fala");
const botao_voltar = document.querySelector(".botao_voltar");
const botao_continuar = document.querySelector(".botao_continuar");
const lucas = document.querySelector(".lucas");
const choosenAvatar = localStorage.getItem("pelo_mundo_avatar");

let balao_fala_num = 1;

avatar.src = choosenAvatar;

const mudar_balao_fala = () => {
  if (balao_fala_num > 1) {
    botao_voltar.src = "./assets/botao_azul_voltar.png";
    botao_continuar.src = "./assets/botao_azul_continuar.png";
  }

  if (balao_fala_num === 1) {
    botao_voltar.src = "";
    botao_continuar.src = "./assets/botao_azul_continuar.png";
  }

  if (balao_fala_num === 1) {
    balao_fala.src = "./assets/baloes_fala/balao_fala_01.png";
    botao_continuar.src = "./assets/botao_azul_continuar.png";
  }

  if (balao_fala_num === 2) {
    balao_fala.src = "./assets/baloes_fala/balao_fala_02.png";
    botao_continuar.src = "./assets/botao_azul_continuar.png";
  }

  if (balao_fala_num === 3) {
    balao_fala.src = "./assets/baloes_fala/balao_fala_03.png";
    botao_continuar.src = "./assets/botao_azul_continuar.png";
  }

  if (balao_fala_num === 4) {
    balao_fala.src = "";
    lucas.src = "./assets/lucas_animacao/lucas_01.png";
    botao_voltar.src = "./assets/botao_azul_voltar.png";
    botao_continuar.src = "";
  }
};

const add_balao_num = () => {

  if (balao_fala_num >= 3) {
    let botao_reiniciar = document.createElement("img")
    botao_reiniciar.classList.add("botao_reiniciar")
    botao_reiniciar.src = "./assets/botao_reiniciar.png";

    setTimeout(() => {
      content.appendChild(botao_reiniciar)
    }, 1000);
   

    botao_reiniciar.addEventListener("click", () => {
      window.location.href = "/"
    })

    botao_voltar.src = "";
    balao_fala.src = "";


  }

  if (balao_fala_num <= 3) {
    balao_fala_num += 1;
  }

  mudar_balao_fala();
};

const sub_balao_num = () => {
  if (balao_fala_num <= 1) {
    window.location.href = "../tela-03/";
  }

  if (balao_fala_num > 1) {
    balao_fala_num -= 1;
  }

  mudar_balao_fala();
};

botao_continuar.addEventListener("click", () => {
  add_balao_num();
});

botao_voltar.addEventListener("click", () => {
  let botao_reiniciar = document.querySelector(".botao_reiniciar")
  sub_balao_num();
  content.removeChild(botao_reiniciar)
});

mudar_balao_fala();
