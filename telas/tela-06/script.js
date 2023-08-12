const luneta = document.querySelector(".luneta")
const luneta_brilho = document.createElement("img");
const bussola = document.querySelector(".bussola")
const bussola_brilho = document.createElement("img");
const dicas = document.querySelector(".dicas")
const dicas_brilho = document.createElement("img");
const diario = document.querySelector(".diario");
const diario_brilho = document.createElement("img");
const container = document.querySelector('.container');
const content = document.querySelector('.content');

let luneta_clicked = false
let bussola_clicked = false
let dicas_clicked = false
let diario_clicked = false

luneta_brilho.classList.add("luneta_brilho")
bussola_brilho.classList.add("bussola_brilho")
dicas_brilho.classList.add("dicas_brilho")
diario_brilho.classList.add("diario_brilho")

luneta_brilho.src = ""
bussola_brilho.src = ""
dicas_brilho.src = ""
diario_brilho.src = ""

content.append(luneta_brilho, bussola_brilho, dicas_brilho, diario_brilho);

let x = 0;
let y = 0;
const step = 2.5; //2.5 é o padrão
let zoom = 800; //800 é o padrão
const keys = {};

window.onload = function() {
  x = -container.offsetWidth * (zoom / 100 - 1) / 2;
  y = -container.offsetHeight * (zoom / 100 - 1) / 2;
  container.style.backgroundSize = `${zoom}%`;
  container.style.backgroundPosition = `${x}px ${y}px`;
};

document.addEventListener('keydown', function(event) {
  keys[event.key] = true;
});

document.addEventListener('keyup', function(event) {
  keys[event.key] = false;
});

setInterval(function() {
  if (keys['ArrowLeft']) {
    x = Math.min(x + step, 0);
  }
  if (keys['ArrowRight']) {
    x = Math.max(x - step, -container.offsetWidth * (zoom / 100 - 1));
  }
  if (keys['ArrowUp']) {
    y = Math.min(y + step, 0);
  }
  if (keys['ArrowDown']) {
    y = Math.max(y - step, -container.offsetHeight * (zoom / 100 - 1));
  }
 
   container.style.backgroundPosition = `${x}px ${y}px`;
},10);

luneta.addEventListener("click", () => {
  if (luneta_clicked === false) {
    luneta_brilho.src = "./assets/01_luneta/luneta_contorno.png";
    bussola_brilho.src = "";
    dicas_brilho.src = "";
    diario_brilho.src = "";
    luneta_clicked = true;
    bussola_clicked = false;
    dicas_clicked = false;
    diario_clicked = false;

    // Decrease the zoom while maintaining the center focus
    const previousZoom = zoom;
    zoom -= 50; // Adjust this value as needed
    const zoomFactor = zoom / previousZoom;
    x = (x + container.offsetWidth / 2) * zoomFactor - container.offsetWidth / 2;
    y = (y + container.offsetHeight / 2) * zoomFactor - container.offsetHeight / 2;
    container.style.backgroundSize = `${zoom}%`;
    container.style.backgroundPosition = `${x}px ${y}px`;
  } else if (luneta_clicked === true) {
    luneta_brilho.src = "";
    luneta_clicked = false;

    // Reset the zoom while maintaining the center focus
    const previousZoom = zoom;
    zoom = 800; // Reset to the initial value
    const zoomFactor = zoom / previousZoom;
    x = (x + container.offsetWidth / 2) * zoomFactor - container.offsetWidth / 2;
    y = (y + container.offsetHeight / 2) * zoomFactor - container.offsetHeight / 2;
    container.style.backgroundSize = `${zoom}%`;
    container.style.backgroundPosition = `${x}px ${y}px`;
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


  } else if (bussola_clicked === true) {
    bussola_brilho.src = "";
    bussola_clicked = false;
    console.log(bussola_clicked)
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
