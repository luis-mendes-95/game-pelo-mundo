const content = document.querySelector(".content");
const avatar = document.querySelector(".avatar");
const contorno_avatar = document.querySelector(".contorno_avatar");
const botao_voltar_troca = document.querySelector(".botao_voltar_troca");
const botao_avancar_troca = document.querySelector(".botao_avancar_troca");
const botao_voltar = document.querySelector(".botao_voltar");

let avatar_number = 1;

const changeAvatar = () => {
  if (avatar_number === 1) {
    avatar.src = "./assets/avatares/negra.png";
    localStorage.setItem("pelo_mundo_avatar", "./assets/avatares/negra.png");
    avatar.style.left = "46%"
    content.removeChild(botao_voltar_troca);
  }

  if (avatar_number === 2) {
    avatar.src = "./assets/avatares/negro.png";
    localStorage.setItem("pelo_mundo_avatar", "./assets/avatares/negro.png");
    avatar.style.left = "45.5%"
    content.appendChild(botao_voltar_troca);
  }

  if (avatar_number === 3) {
    avatar.src = "./assets/avatares/morena.png";
    localStorage.setItem("pelo_mundo_avatar", "./assets/avatares/morena.png");
    avatar.style.left = "46%"
  }

  if (avatar_number === 4) {
    avatar.src = "./assets/avatares/loiro.png";
    localStorage.setItem("pelo_mundo_avatar", "./assets/avatares/loiro.png");
    avatar.style.left = "46%"
  }

  if (avatar_number === 5) {
    avatar.src = "./assets/avatares/japonesa.png";
    localStorage.setItem("pelo_mundo_avatar", "./assets/avatares/japonesa.png");
    avatar.style.left = "46%"
    content.appendChild(botao_avancar_troca);
  }

  if (avatar_number === 6) {
    avatar.src = "./assets/avatares/japones.png";
    localStorage.setItem("pelo_mundo_avatar", "./assets/avatares/japones.png");
    avatar.style.left = "46%"
    content.removeChild(botao_avancar_troca);
  }
};

const add_avatar_number = () => {
  if (avatar_number >= 6) {
    return;
  }

  if (avatar_number < 6) {
    avatar_number += 1;
  }

  changeAvatar();
};

const subtract_avatar_number = () => {
  if (avatar_number <= 1) {
    return;
  }

  if (avatar_number > 1) {
    avatar_number -= 1;
  }
  changeAvatar();
};

botao_avancar_troca.addEventListener("click", () => {
  add_avatar_number();
});

botao_voltar_troca.addEventListener("click", () => {
  subtract_avatar_number();
});

botao_voltar.addEventListener("click", () => {
  window.location.href = "../tela-02/?param=4";
});

avatar.addEventListener("mouseenter", () => {
  if (avatar_number === 1) {
    contorno_avatar.src = "./assets/avatares/negra_contorno.png";
  }
  if (avatar_number === 2) {
    contorno_avatar.src = "./assets/avatares/negro_contorno.png";
  }
  if (avatar_number === 3) {
    contorno_avatar.src = "./assets/avatares/morena_contorno.png";
  }
  if (avatar_number === 4) {
    contorno_avatar.src = "./assets/avatares/loiro_contorno.png";
  }
  if (avatar_number === 5) {
    contorno_avatar.src = "./assets/avatares/japonesa_contorno.png";
  }
  if (avatar_number === 6) {
    contorno_avatar.src = "./assets/avatares/japones_contorno.png";
  }
});

avatar.addEventListener("mouseleave", () => {
  contorno_avatar.src = "";
});

avatar.addEventListener("click", () => {
  window.location.href = "../tela-04/";
});

changeAvatar();
