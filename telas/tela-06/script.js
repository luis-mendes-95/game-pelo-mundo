const balao = document.querySelector(".balao");
const luneta = document.querySelector(".luneta");
const luneta_brilho = document.createElement("img");
const bussola = document.querySelector(".bussola");
const bussola_brilho = document.createElement("img");
const bussola_grande = document.querySelector(".bussola_grande");
const bussola_ponteiro = document.querySelector(".bussola_ponteiro");
const bussola_circulo = document.querySelector(".bussola_circulo");
const dicas = document.querySelector(".dicas");
const dicas_brilho = document.createElement("img");
const diario = document.querySelector(".diario");
const diario_brilho = document.createElement("img");
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const mapa_mundi = document.querySelector(".mapa_mundi");

let luneta_clicked = false;
let bussola_clicked = false;
let dicas_clicked = false;
let diario_clicked = false;

luneta_brilho.classList.add("luneta_brilho");
bussola_brilho.classList.add("bussola_brilho");
dicas_brilho.classList.add("dicas_brilho");
diario_brilho.classList.add("diario_brilho");

luneta_brilho.src = "";
bussola_brilho.src = "";
dicas_brilho.src = "";
diario_brilho.src = "";

content.append(luneta_brilho, bussola_brilho, dicas_brilho, diario_brilho);

const pressedKeys = {};

document.addEventListener("keydown", handleArrowKeyDown);
document.addEventListener("keyup", handleArrowKeyUp);

const moveAmount = 14; //

let animationFrameId = null;

function handleMovement() {
  if (luneta_clicked === false) {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  
    animationFrameId = requestAnimationFrame(() => {
      // Get the current transform values
      const transform = window.getComputedStyle(mapa_mundi).getPropertyValue("transform");
      const matrix = new DOMMatrix(transform);
  
      // Calculate the movement amounts based on pressed keys
      const moveX = (pressedKeys["ArrowRight"] ? -moveAmount : 0) + (pressedKeys["ArrowLeft"] ? moveAmount : 0);
      const moveY = (pressedKeys["ArrowDown"] ? -moveAmount : 0) + (pressedKeys["ArrowUp"] ? moveAmount : 0);
  
      // Calculate the new positions after movement
      const newX = matrix.m41 + moveX;
      const newY = matrix.m42 + moveY;
  
      // Limit the movement based on the boundaries of mapa_mundi
      const maxTranslateX = (mapa_mundi.clientWidth * matrix.a - container.clientWidth) / 2;
      const maxTranslateY = (mapa_mundi.clientHeight * matrix.a - container.clientHeight) / 2;
  
      matrix.m41 = Math.min(Math.max(-maxTranslateX, newX), maxTranslateX);
      matrix.m42 = Math.min(Math.max(-maxTranslateY, newY), maxTranslateY);
  
      mapa_mundi.style.transform = matrix.toString();
  
      // Continue the animation loop
      animationFrameId = requestAnimationFrame(handleMovement);
    });
  }
}

function handleArrowKeyDown(event) {
  const arrowKey = event.key;

  pressedKeys[arrowKey] = true;

  handleMovement();
}

function handleArrowKeyUp(event) {
  const arrowKey = event.key;

  pressedKeys[arrowKey] = false;

  handleMovement();
}

luneta.addEventListener("click", () => {
  if (luneta_clicked === false) {
    // Atualizar os valores da matriz de transformação quando a luneta é clicada
    const transform = window.getComputedStyle(mapa_mundi).getPropertyValue("transform");
    const matrix = new DOMMatrix(transform);
    
    // Atualizar os valores da matriz de acordo com o que você deseja
    matrix.a = 4;
    matrix.d = 4;

    // Aplicar a nova matriz de transformação
    mapa_mundi.style.transform = matrix.toString();

    // Resto do seu código para atualizar os estados das outras interações
    bussola_brilho.src = "";
    dicas_brilho.src = "";
    diario_brilho.src = "";
    bussola_clicked = false;
    dicas_clicked = false;
    diario_clicked = false;

    luneta_brilho.src = "./assets/01_luneta/luneta_contorno.png";
    luneta_clicked = true;
    bussola_clicked = false;
    dicas_clicked = false;
    diario_clicked = false;
  } else if (luneta_clicked === true) {
    // Resetar os valores da matriz de transformação quando a luneta é clicada novamente
    const transform = window.getComputedStyle(mapa_mundi).getPropertyValue("transform");
    const matrix = new DOMMatrix(transform);

    // Atualizar os valores da matriz de acordo com a matriz original
    matrix.a = 5;
    matrix.d = 5;

    // Aplicar a nova matriz de transformação
    mapa_mundi.style.transform = matrix.toString();

    // Resto do seu código para atualizar os estados das outras interações
    bussola_brilho.src = "";
    dicas_brilho.src = "";
    diario_brilho.src = "";
    bussola_clicked = false;
    dicas_clicked = false;
    diario_clicked = false;

    luneta_brilho.src = "";
    luneta_clicked = false;
  }
});


bussola.addEventListener("click", () => {

  if (bussola_clicked === false) {
    bussola_brilho.src = "./assets/02_bussola/bussola_contorno.png";
    bussola_clicked = true;

    luneta_brilho.src = ""
    dicas_brilho.src = ""
    diario_brilho.src = ""
    luneta_clicked = false;
    dicas_clicked = false;
    diario_clicked = false;

    bussola_grande.src = "./assets/bussola_grande/bussola_aumentada.png"
    bussola_ponteiro.src = "./assets/bussola_grande/ponteiro.png"
    bussola_circulo.src = "./assets/bussola_grande/circulo.png"


  } else if (bussola_clicked === true) {
    bussola_brilho.src = "";
    bussola_clicked = false;
    console.log(bussola_clicked)
    bussola_grande.src = ""
    bussola_ponteiro.src = ""
    bussola_circulo.src = ""
  }


})

dicas.addEventListener("click", () => {

  if (dicas_clicked === false) {
    dicas_brilho.src = "./assets/03_dicas/dicas_contorno.png";
    dicas_clicked = true;

    luneta_brilho.src = ""
    bussola_brilho.src = ""
    diario_brilho.src = ""
    luneta_clicked = false;
    bussola_clicked = false;
    diario_clicked = false;

  } else if (dicas_clicked === true) {
    dicas_brilho.src = "";
    dicas_clicked = false;
    console.log(dicas_clicked)
  }


})

diario.addEventListener("click", () => {

  if (diario_clicked === false) {
    diario_brilho.src = "./assets/04_diario_de_bordo/diario_de_bordo_contorno.png";
    diario_clicked = true;

    luneta_brilho.src = ""
    bussola_brilho.src = ""
    dicas_brilho.src = ""
    luneta_clicked = false;
    bussola_clicked = false;
    dicas_clicked = false;

  } else if (diario_clicked === true) {
    diario_brilho.src = "";
    diario_clicked = false;
    console.log(diario_clicked)
  }


})

const arrowKeyState = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false
};

document.addEventListener("keydown", event => {
  const arrowKey = event.key;

  // Verificar se a tecla foi pressionada inicialmente
  if (!arrowKeyState[arrowKey]) {
    arrowKeyState[arrowKey] = true;

    // Atualizar o src de acordo com a tecla pressionada
    if (arrowKey === "ArrowUp") {
      balao.src = "./assets/balao/balao_costa.gif";
    } else if (arrowKey === "ArrowDown") {
      balao.src = "./assets/balao/balao_frente.gif";
    } else if (arrowKey === "ArrowRight") {
      balao.src = "./assets/balao/balao_direito.gif";
    } else if (arrowKey === "ArrowLeft") {
      balao.src = "./assets/balao/balao_esquerdo.gif";
    }
  }
});

document.addEventListener("keyup", event => {
  const arrowKey = event.key;

  // Resetar o estado da tecla quando ela é liberada
  arrowKeyState[arrowKey] = false;

  // Atualizar o src de acordo com as teclas restantes pressionadas
  if (arrowKeyState.ArrowUp) {
    balao.src = "./assets/balao/balao_costa.gif";
  } else if (arrowKeyState.ArrowDown) {
    balao.src = "./assets/balao/balao_frente.gif";
  } else if (arrowKeyState.ArrowRight) {
    balao.src = "./assets/balao/balao_direito.gif";
  } else if (arrowKeyState.ArrowLeft) {
    balao.src = "./assets/balao/balao_esquerdo.gif";
  } else {
    // Se nenhuma tecla estiver pressionada, volte ao estado padrão (frente)
    balao.src = "./assets/balao/balao_frente.gif";
  }
});
