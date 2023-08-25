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
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const mapa_mundi = document.querySelector(".mapa_mundi");
const estatua_liberdade = document.querySelector(".estatua_liberdade");
const estatua_liberdade_contorno = document.querySelector(".estatua_liberdade_contorno");
const torre_eiffel = document.querySelector(".torre_eiffel");
const torre_eiffel_contorno = document.querySelector(".torre_eiffel_contorno");
const torre_eiffel_praca = document.querySelector(".torre_eiffel_praca");
const torre_eiffel_praca_contorno = document.querySelector(".torre_eiffel_praca_contorno");
const piramide_teotihuacan_moita_terra = document.querySelector(".piramide_teotihuacan_moita_terra");
const piramide_teotihuacan = document.querySelector(".piramide_teotihuacan");
const piramide_teotihuacan_contorno = document.querySelector(".piramide_teotihuacan_contorno");
const piramide_teotihuacan_moita_terra_contorno = document.querySelector(".piramide_teotihuacan_moita_terra_contorno");
const machu_pichu = document.querySelector(".machu_pichu");
const machu_pichu_terras = document.querySelector(".machu_pichu_terras");
const machu_pichu_moitas = document.querySelector(".machu_pichu_moitas");
const machu_pichu_moitas_contorno = document.querySelector(".machu_pichu_moitas_contorno");
const machu_pichu_terras_contorno = document.querySelector(".machu_pichu_terras_contorno");
const machu_pichu_contorno = document.querySelector(".machu_pichu_contorno");
const piramides_gize = document.querySelector(".piramides_gize");
const piramides_gize_contorno = document.querySelector(".piramides_gize_contorno");
const opera_sidney = document.querySelector(".opera_sidney");
const opera_sidney_contorno = document.querySelector(".opera_sidney_contorno");
const big_ben = document.querySelector(".big_ben");
const big_ben_contorno = document.querySelector(".big_ben_contorno");
const big_ben_bus = document.querySelector(".big_ben_bus");
const big_ben_bus_contorno = document.querySelector(".big_ben_bus_contorno");
const torre_pisa = document.querySelector(".torre_pisa");
const torre_pisa_contorno = document.querySelector(".torre_pisa_contorno");
const monte_fuji = document.querySelector(".monte_fuji");
const monte_fuji_contorno = document.querySelector(".monte_fuji_contorno");
const taj_mahal = document.querySelector(".taj_mahal");
const taj_mahal_contorno = document.querySelector(".taj_mahal_contorno");
const taj_mahal_torres = document.querySelector(".taj_mahal_torres");
const taj_mahal_torres_contorno = document.querySelector(".taj_mahal_torres_contorno");
const black_background = document.querySelector(".black_background");
const dica = document.querySelector(".dica");
const dica_seta_volta = document.querySelector(".dica_seta_volta");
const dica_seta_avanca = document.querySelector(".dica_seta_avanca");
const dica_fechar = document.querySelector(".dica_fechar");
const diario_grande = document.querySelector(".diario_grande");
const diario_seta_avanca = document.querySelector(".diario_seta_avanca");
const diario_seta_volta = document.querySelector(".diario_seta_volta");
const diario_fechar = document.querySelector(".diario_fechar");
const monumento_info = document.querySelector(".monumento_info");
const monumento_seta_volta = document.querySelector(".monumento_seta_volta");
const monumento_seta_avanca = document.querySelector(".monumento_seta_avanca");
const monumento_fechar = document.querySelector(".monumento_fechar");
const final_seta_avanca = document.querySelector(".final_seta_avanca");

let luneta_clicked = false;
let bussola_clicked = false;
let dicas_clicked = false;
let diario_clicked = false;

let can_move = true;

let estatua_liberdade_descoberta = false;
let piramide_de_teotihuacan_descoberta = false;
let machu_picchu_descoberto = false;
let piramides_gize_descoberta = false;
let torre_pisa_descoberta = false;
let torre_eiffel_descoberta = false;
let big_ben_descoberto = false;
let taj_mahal_descoberto = false;
let monte_fuji_descoberto = false;
let opera_sidney_descoberta = false;

const checkAllComplete = () => {
  let all_complete = 0;

  if (estatua_liberdade_descoberta === true) {
    all_complete += 1;
  }

  if (piramide_de_teotihuacan_descoberta === true) {
    all_complete += 1;
  }

  if (machu_picchu_descoberto === true) {
    all_complete += 1;
  }

  if (piramides_gize_descoberta === true) {
    all_complete += 1;
  }

  if (torre_pisa_descoberta === true) {
    all_complete += 1;
  }

  if (torre_eiffel_descoberta === true) {
    all_complete += 1;
  }

  if (big_ben_descoberto === true) {
    all_complete += 1;
  }

  if (taj_mahal_descoberto === true) {
    all_complete += 1;
  }

  if (monte_fuji_descoberto === true) {
    all_complete += 1;
  }

  if (opera_sidney_descoberta === true) {
    all_complete += 1;
  }

  if (all_complete === 10) {
    setTimeout(() => {
      final_seta_avanca.src =
        "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    }, 5000);
  }
};

let folhas_dicas = [];
let choosen_dica = 1;


let folhas_diario = ["./assets/01_diario_sem_adesivos/capa_diario.png", "./assets/01_diario_sem_adesivos/guarda_diario.png",];
let choosen_diario = 1;


let monumento_fechar_num = 1;
let monumento_page = 1;
let monumento_atual = "";


const monumento_info_activate = (monumento) => {

  black_background.style.display = "flex";

  monumento_fechar_num = 1;
  can_move = false;

  if (monumento === "estatua_liberdade") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/01_estatua_liberdade/01_estatua_liberdade.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_atual = "estatua_liberdade";
  }

  if (monumento === "piramide_teotihuacan") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/09_piramide_de_teotihuacan/09_piramide_de_teotihuacan_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_atual = "piramide_teotihuacan";
  }

  if (monumento === "machu_pichu") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/10_machu_picchu/10_machu_picchu_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_atual = "machu_pichu";
  }

  if (monumento === "piramides_gize") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/07_piramides/07_piramides_gize_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_atual = "piramides_gize";
  }

  if (monumento === "torre_pisa") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/02_torre_pisa/02_torre_pisa_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_atual = "torre_pisa";
  }

  if (monumento === "torre_eiffel") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/03_torre_eiffel/03_torre_eiffel_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_atual = "torre_eiffel";
  }

  if (monumento === "big_ben") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/04_big_ben/04_big_ben_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_atual = "big_ben";
  }

  if (monumento === "taj_mahal") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/06_taj_mahal/06_taj_mahal_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_atual = "taj_mahal";
  }

  if (monumento === "monte_fuji") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/05_monte_fuji/05_monte_fuji_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_atual = "monte_fuji";
  }

  if (monumento === "opera_sidney") {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/08_opera_de_sydney/08_opera_de_sydney_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_atual = "opera_sidney";
  }


};

estatua_liberdade.addEventListener("click", () => {
  estatua_liberdade_descoberta = true;
  monumento_info_activate("estatua_liberdade");
});
piramide_teotihuacan.addEventListener("click", () => {
  piramide_de_teotihuacan_descoberta = true;
  monumento_info_activate("piramide_teotihuacan");
});
piramide_teotihuacan_moita_terra.addEventListener("click", () => {
  piramide_de_teotihuacan_descoberta = true;
  monumento_info_activate("piramide_teotihuacan");
});
machu_pichu.addEventListener("click", () => {
  machu_picchu_descoberto = true;
  monumento_info_activate("machu_pichu");
});
machu_pichu_terras.addEventListener("click", () => {
  machu_picchu_descoberto = true;
  monumento_info_activate("machu_pichu");
});
machu_pichu_moitas.addEventListener("click", () => {
  machu_picchu_descoberto = true;
  monumento_info_activate("machu_pichu");
});

piramides_gize.addEventListener("click", () => {
  piramides_gize_descoberta = true;
  monumento_info_activate("piramides_gize");
});
torre_pisa.addEventListener("click", () => {
  torre_pisa_descoberta = true;
  monumento_info_activate("torre_pisa");
});
torre_eiffel.addEventListener("click", () => {
  torre_eiffel_descoberta = true;
  monumento_info_activate("torre_eiffel");
});
torre_eiffel_praca.addEventListener("click", () => {
  torre_eiffel_descoberta = true;
  monumento_info_activate("torre_eiffel");
});
big_ben.addEventListener("click", () => {
  big_ben_descoberto = true;
  monumento_info_activate("big_ben");
});
big_ben_bus.addEventListener("click", () => {
  big_ben_descoberto = true;
  monumento_info_activate("big_ben");
});
taj_mahal.addEventListener("click", () => {
  taj_mahal_descoberto = true;
  monumento_info_activate("taj_mahal");
});
taj_mahal_torres.addEventListener("click", () => {
  taj_mahal_descoberto = true;
  monumento_info_activate("taj_mahal");
});
monte_fuji.addEventListener("click", () => {
  monte_fuji_descoberto = true;
  monumento_info_activate("monte_fuji");
});
opera_sidney.addEventListener("click", () => {
  opera_sidney_descoberta = true;
  monumento_info_activate("opera_sidney");
});

luneta_brilho.classList.add("luneta_brilho");
bussola_brilho.classList.add("bussola_brilho");
dicas_brilho.classList.add("dicas_brilho");
diario_brilho.classList.add("diario_brilho");

luneta_brilho.src = "";
bussola_brilho.src = "";
dicas_brilho.src = "";
diario_brilho.src = "";

content.append(luneta_brilho, bussola_brilho, dicas_brilho, diario_brilho);

monumento_fechar.addEventListener("click", () => {

  if (monumento_fechar_num === 2) {
    monumento_info.src = "";
    monumento_fechar.src = "";
    monumento_info.style.width = "75%";
    monumento_info.style.right = "15%";
    can_move = true;
    black_background.style.display = "none";
  }

  if (monumento_fechar_num === 1) {
    monumento_info.src =
      "./assets/mensagem_lucas_novo_adesivo/mensagem_lucas_novos_adesivos.png";
    monumento_info.style.width = "55%";
    monumento_info.style.right = "25%";
    monumento_fechar_num += 1;
    monumento_seta_volta.src = "";
  }

  monumento_page = 1;
  checkAllComplete();

});

monumento_seta_avanca.addEventListener("click", () => {
  if (monumento_atual === "piramide_teotihuacan" && monumento_page === 2) {
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
  }

  if (monumento_atual === "piramide_teotihuacan" && monumento_page === 1) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/09_piramide_de_teotihuacan/09_piramide_de_teotihuacan_02.png";
    monumento_seta_avanca.src = "";
    monumento_seta_volta.src =
      "./assets/cards_monumentos_historicos/botoes/botao_voltar.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_page += 1;
  }

  if (monumento_atual === "machu_pichu" && monumento_page === 2) {
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
  }

  if (monumento_atual === "machu_pichu" && monumento_page === 1) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/10_machu_picchu/10_machu_picchu_02.png";
    monumento_seta_avanca.src = "";
    monumento_seta_volta.src =
      "./assets/cards_monumentos_historicos/botoes/botao_voltar.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_page += 1;
  }

  if (monumento_atual === "piramides_gize" && monumento_page === 2) {
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
  }

  if (monumento_atual === "piramides_gize" && monumento_page === 1) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/07_piramides/07_piramides_gize_02.png";
    monumento_seta_avanca.src = "";
    monumento_seta_volta.src =
      "./assets/cards_monumentos_historicos/botoes/botao_voltar.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_page += 1;
  }

  if (monumento_atual === "torre_pisa" && monumento_page === 2) {
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
  }

  if (monumento_atual === "torre_pisa" && monumento_page === 1) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/02_torre_pisa/02_torre_pisa_02.png";
    monumento_seta_avanca.src = "";
    monumento_seta_volta.src =
      "./assets/cards_monumentos_historicos/botoes/botao_voltar.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_page += 1;
  }

  if (monumento_atual === "torre_eiffel" && monumento_page === 2) {
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
  }

  if (monumento_atual === "torre_eiffel" && monumento_page === 1) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/03_torre_eiffel/03_torre_eiffel_02.png";
    monumento_seta_avanca.src = "";
    monumento_seta_volta.src =
      "./assets/cards_monumentos_historicos/botoes/botao_voltar.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_page += 1;
  }

  if (monumento_atual === "big_ben" && monumento_page === 2) {
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
  }

  if (monumento_atual === "big_ben" && monumento_page === 1) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/04_big_ben/04_big_ben_02.png";
    monumento_seta_avanca.src = "";
    monumento_seta_volta.src =
      "./assets/cards_monumentos_historicos/botoes/botao_voltar.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_page += 1;
  }

  if (monumento_atual === "taj_mahal" && monumento_page === 2) {
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
  }

  if (monumento_atual === "taj_mahal" && monumento_page === 1) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/06_taj_mahal/06_taj_mahal_02.png";
    monumento_seta_avanca.src = "";
    monumento_seta_volta.src =
      "./assets/cards_monumentos_historicos/botoes/botao_voltar.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_page += 1;
  }

  if (monumento_atual === "monte_fuji" && monumento_page === 2) {
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
  }

  if (monumento_atual === "monte_fuji" && monumento_page === 1) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/05_monte_fuji/05_monte_fuji_02.png";
    monumento_seta_avanca.src = "";
    monumento_seta_volta.src =
      "./assets/cards_monumentos_historicos/botoes/botao_voltar.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_page += 1;
  }

  if (monumento_atual === "opera_sidney" && monumento_page === 2) {
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
  }

  if (monumento_atual === "opera_sidney" && monumento_page === 1) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/08_opera_de_sydney/08_opera_de_sydney_02.png";
    monumento_seta_avanca.src = "";
    monumento_seta_volta.src =
      "./assets/cards_monumentos_historicos/botoes/botao_voltar.png";
    monumento_fechar.src =
      "./assets/cards_monumentos_historicos/botoes/botao_fechar.png";
    monumento_page += 1;
  }
});

monumento_seta_volta.addEventListener("click", () => {
  if (monumento_atual === "piramide_teotihuacan" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/09_piramide_de_teotihuacan/09_piramide_de_teotihuacan_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }

  if (monumento_atual === "machu_pichu" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/10_machu_picchu/10_machu_picchu_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }

  if (monumento_atual === "piramide_teotihuacan" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/09_piramide_de_teotihuacan/09_piramide_de_teotihuacan_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }

  if (monumento_atual === "piramides_gize" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/07_piramides/07_piramides_gize_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }

  if (monumento_atual === "torre_pisa" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/02_torre_pisa/02_torre_pisa_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }

  if (monumento_atual === "torre_eiffel" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/03_torre_eiffel/03_torre_eiffel_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }

  if (monumento_atual === "big_ben" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/04_big_ben/04_big_ben_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }

  if (monumento_atual === "taj_mahal" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/06_taj_mahal/06_taj_mahal_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }

  if (monumento_atual === "monte_fuji" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/05_monte_fuji/05_monte_fuji_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }

  if (monumento_atual === "opera_sidney" && monumento_page === 2) {
    monumento_info.src =
      "./assets/cards_monumentos_historicos/08_opera_de_sydney/08_opera_de_sydney_01.png";
    monumento_seta_avanca.src =
      "./assets/cards_monumentos_historicos/botoes/botao_continuar.png";
    monumento_seta_volta.src = "";
    monumento_page = 1;
    monumento_fechar.src = "";
  }
});

final_seta_avanca.addEventListener("click", () => {
  window.location.href = "../tela-07/";
});

const pressedKeys = {};

document.addEventListener("keydown", handleArrowKeyDown);
document.addEventListener("keyup", handleArrowKeyUp);

const moveAmount = 2;

let animationFrameId = null;

let lastTimestamp = 0;
const frameRate = 1 / 1;

function handleMovement(timestamp) {
  if (
    luneta_clicked === false &&
    dicas_clicked === false &&
    diario_clicked === false &&
    can_move === true
  ) {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    if (timestamp - lastTimestamp >= frameRate) {
      lastTimestamp = timestamp;

      const transform = window
        .getComputedStyle(mapa_mundi)
        .getPropertyValue("transform");
      const matrix = new DOMMatrix(transform);

      const moveX =
        (pressedKeys["ArrowRight"] ? -moveAmount : 0) +
        (pressedKeys["ArrowLeft"] ? moveAmount : 0);
      const moveY =
        (pressedKeys["ArrowDown"] ? -moveAmount : 0) +
        (pressedKeys["ArrowUp"] ? moveAmount : 0);

      const newX = matrix.m41 + moveX;
      const newY = matrix.m42 + moveY;

      const maxTranslateX =
        (mapa_mundi.clientWidth * matrix.a - container.clientWidth) / 2;
      const maxTranslateY =
        (mapa_mundi.clientHeight * matrix.a - container.clientHeight) / 2;

      matrix.m41 = Math.min(Math.max(-maxTranslateX, newX), maxTranslateX);
      matrix.m42 = Math.min(Math.max(-maxTranslateY, newY), maxTranslateY);

      mapa_mundi.style.transform = matrix.toString();

      atualizarDirecaoBussola();

      animationFrameId = requestAnimationFrame(handleMovement);
    } else {
      animationFrameId = requestAnimationFrame(handleMovement);
    }
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
    const transform = window
      .getComputedStyle(mapa_mundi)
      .getPropertyValue("transform");
    const matrix = new DOMMatrix(transform);

    matrix.a = 3;
    matrix.d = 3;

    mapa_mundi.style.transform = matrix.toString();

    bussola_brilho.src = "";
    dicas_brilho.src = "";
    diario_brilho.src = "";
    bussola_grande.src = "";
    bussola_ponteiro.src = "";
    bussola_circulo.src = "";
    bussola_clicked = false;
    dicas_clicked = false;
    diario_clicked = false;

    luneta_brilho.src = "./assets/01_luneta/luneta_contorno.png";
    luneta_clicked = true;
    bussola_clicked = false;
    dicas_clicked = false;
    diario_clicked = false;
  } else if (luneta_clicked === true) {
    const transform = window
      .getComputedStyle(mapa_mundi)
      .getPropertyValue("transform");
    const matrix = new DOMMatrix(transform);

    matrix.a = 5;
    matrix.d = 5;

    mapa_mundi.style.transform = matrix.toString();

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
  if (luneta_clicked === false) {
    if (bussola_clicked === false) {
      bussola_brilho.src = "./assets/02_bussola/bussola_contorno.png";
      bussola_clicked = true;

      luneta_brilho.src = "";
      dicas_brilho.src = "";
      diario_brilho.src = "";
      luneta_clicked = false;
      dicas_clicked = false;
      diario_clicked = false;

      bussola_grande.src = "./assets/bussola_grande/bussola_aumentada.png";
      bussola_ponteiro.src = "./assets/bussola_grande/ponteiro.png";
      bussola_circulo.src = "./assets/bussola_grande/circulo.png";
    } else if (bussola_clicked === true) {
      bussola_brilho.src = "";
      bussola_clicked = false;
      console.log(bussola_clicked);
      bussola_grande.src = "";
      bussola_ponteiro.src = "";
      bussola_circulo.src = "";
    }
  }
});

const handleDicas = () => {
  folhas_dicas = [];

  if (estatua_liberdade_descoberta === true) {
    let estatua_liberdade_dica =
      "./assets/02_folhas_com_figuras/01_folha_estatua_liberdade.png";
    folhas_dicas.push(estatua_liberdade_dica);
  } else {
    let estatua_liberdade_dica =
      "./assets/01_folhas_sem_figuras/01_folha_estatua_liberdade.png";
    folhas_dicas.unshift(estatua_liberdade_dica);
  }
  if (machu_picchu_descoberto === true) {
    let machu_picchu_dica =
      "./assets/02_folhas_com_figuras/10_folha_machu_picchu.png";
    folhas_dicas.push(machu_picchu_dica);
  } else {
    let machu_picchu_dica =
      "./assets/01_folhas_sem_figuras/10_folha_machu_picchu.png";
    folhas_dicas.unshift(machu_picchu_dica);
  }
  if (piramide_de_teotihuacan_descoberta === true) {
    let piramide_de_teotihuacan_dica =
      "./assets/02_folhas_com_figuras/09_folha_piramide.png";
    folhas_dicas.push(piramide_de_teotihuacan_dica);
  } else {
    let piramide_de_teotihuacan_dica =
      "./assets/01_folhas_sem_figuras/09_folha_piramide.png";
    folhas_dicas.unshift(piramide_de_teotihuacan_dica);
  }
  if (piramides_gize_descoberta === true) {
    let piramides_gize_dica =
      "./assets/02_folhas_com_figuras/07_folha_piramide_gize.png";
    folhas_dicas.push(piramides_gize_dica);
  } else {
    let piramides_gize_dica =
      "./assets/01_folhas_sem_figuras/07_folha_piramide_gize.png";
    folhas_dicas.unshift(piramides_gize_dica);
  }
  if (torre_pisa_descoberta === true) {
    let torre_pisa_dica =
      "./assets/02_folhas_com_figuras/02_folha_torre_pisa.png";
    folhas_dicas.push(torre_pisa_dica);
  } else {
    let torre_pisa_dica =
      "./assets/01_folhas_sem_figuras/02_folha_torre_pisa.png";
    folhas_dicas.unshift(torre_pisa_dica);
  }
  if (torre_eiffel_descoberta === true) {
    let torre_eiffel_dica =
      "./assets/02_folhas_com_figuras/03_folha_torre_eiffel.png";
    folhas_dicas.push(torre_eiffel_dica);
  } else {
    let torre_eiffel_dica =
      "./assets/01_folhas_sem_figuras/03_folha_torre_eiffel.png";
    folhas_dicas.unshift(torre_eiffel_dica);
  }
  if (big_ben_descoberto === true) {
    let big_ben_dica = "./assets/02_folhas_com_figuras/04_folha_big_ben.png";
    folhas_dicas.push(big_ben_dica);
  } else {
    let big_ben_dica = "./assets/01_folhas_sem_figuras/04_folha_big_ben.png";
    folhas_dicas.unshift(big_ben_dica);
  }
  if (taj_mahal_descoberto === true) {
    let taj_mahal_dica =
      "./assets/02_folhas_com_figuras/06_folha_taj_mahal.png";
    folhas_dicas.push(taj_mahal_dica);
  } else {
    let taj_mahal_dica =
      "./assets/01_folhas_sem_figuras/06_folha_taj_mahal.png";
    folhas_dicas.unshift(taj_mahal_dica);
  }
  if (monte_fuji_descoberto === true) {
    let monte_fuji_dica =
      "./assets/02_folhas_com_figuras/05_folha_monte_fuji.png";
    folhas_dicas.push(monte_fuji_dica);
  } else {
    let monte_fuji_dica =
      "./assets/01_folhas_sem_figuras/05_folha_monte_fuji.png";
    folhas_dicas.unshift(monte_fuji_dica);
  }
  if (opera_sidney_descoberta === true) {
    let opera_sidney_dica =
      "./assets/02_folhas_com_figuras/08_folha_opera_sydney.png";
    folhas_dicas.push(opera_sidney_dica);
  } else {
    let opera_sidney_dica =
      "./assets/01_folhas_sem_figuras/08_folha_opera_sydney.png";
    folhas_dicas.unshift(opera_sidney_dica);
  }
};

const handleDiario = () => {
  folhas_diario = ["./assets/01_diario_sem_adesivos/capa_diario.png", "./assets/01_diario_sem_adesivos/guarda_diario.png" ];

  if (estatua_liberdade_descoberta === true) {
    let estatua_liberdade_diario =
      "./assets/02_diario_com_adesivos/01_folha_estatua_liberdade_adesivos.png";
    folhas_diario.push(estatua_liberdade_diario);
  } else {
    let estatua_liberdade_diario =
      "./assets/01_diario_sem_adesivos/01_folha_estatua_liberdade_sombra.png";
    folhas_diario.push(estatua_liberdade_diario);
  }

  if (torre_pisa_descoberta === true) {
    let torre_pisa_diario =
      "./assets/02_diario_com_adesivos/02_folha_torre_pisa_adesivos.jpg";
    folhas_diario.push(torre_pisa_diario);
  } else {
    let torre_pisa_diario =
      "./assets/01_diario_sem_adesivos/02_folha_torre_pisa_sombra.png";
    folhas_diario.push(torre_pisa_diario);
  }

  if (torre_eiffel_descoberta === true) {
    let torre_eiffel_descoberta =
      "./assets/02_diario_com_adesivos/03_folha_torre_eiffel_adesivos.png";
    folhas_diario.push(torre_eiffel_descoberta);
  } else {
    let torre_eiffel_descoberta =
      "./assets/01_diario_sem_adesivos/03_folha_torre_eiffel_sombra.png";
    folhas_diario.push(torre_eiffel_descoberta);
  }

  if (big_ben_descoberto === true) {
    let big_ben_descoberto =
      "./assets/02_diario_com_adesivos/04_folha_big_ben_adesivos.png";
    folhas_diario.push(big_ben_descoberto);
  } else {
    let big_ben_descoberto =
      "./assets/01_diario_sem_adesivos/04_folha_big_ben_sombra.png";
    folhas_diario.push(big_ben_descoberto);
  }

  if (monte_fuji_descoberto === true) {
    let monte_fuji_descoberto =
      "./assets/02_diario_com_adesivos/05_folha_monte_fuji_adesivos.png";
    folhas_diario.push(monte_fuji_descoberto);
  } else {
    let monte_fuji_descoberto =
      "./assets/01_diario_sem_adesivos/05_folha_monte_fuji_sombra.png";
    folhas_diario.push(monte_fuji_descoberto);
  }

  if (taj_mahal_descoberto === true) {
    let taj_mahal_descoberto =
      "./assets/02_diario_com_adesivos/06_folha_taji_mahal_adesivos.png";
    folhas_diario.push(taj_mahal_descoberto);
  } else {
    let taj_mahal_descoberto =
      "./assets/01_diario_sem_adesivos/06_folha_taji_mahal_sombra.png";
    folhas_diario.push(taj_mahal_descoberto);
  }

  if (piramides_gize_descoberta === true) {
    let piramides_gize_descoberta =
      "./assets/02_diario_com_adesivos/07_folha_piramides_gize_adesivos.png";
    folhas_diario.push(piramides_gize_descoberta);
  } else {
    let piramides_gize_descoberta =
      "./assets/01_diario_sem_adesivos/07_folha_piramides_gize_sombra.png";
    folhas_diario.push(piramides_gize_descoberta);
  }

  if (opera_sidney_descoberta === true) {
    let opera_sidney_descoberta =
      "./assets/02_diario_com_adesivos/08_folha_opera_sydney_adesivos.png";
    folhas_diario.push(opera_sidney_descoberta);
  } else {
    let opera_sidney_descoberta =
      "./assets/01_diario_sem_adesivos/08_folha_opera_sydney_sombra.png";
    folhas_diario.push(opera_sidney_descoberta);
  }

  if (piramide_de_teotihuacan_descoberta === true) {
    let piramide_de_teotihuacan_descoberta =
      "./assets/02_diario_com_adesivos/09_folha_piramide_adesivos.png";
    folhas_diario.push(piramide_de_teotihuacan_descoberta);
  } else {
    let piramide_de_teotihuacan_descoberta =
      "./assets/01_diario_sem_adesivos/09_folha_piramide_sombra.png";
    folhas_diario.push(piramide_de_teotihuacan_descoberta);
  }

  if (machu_picchu_descoberto === true) {
    let machu_picchu_descoberto =
      "./assets/02_diario_com_adesivos/10_folha_machu_micchu_adesivos.png";
    folhas_diario.push(machu_picchu_descoberto);
  } else {
    let machu_picchu_descoberto =
      "./assets/01_diario_sem_adesivos/10_folha_machu_micchu_sombra.png";
    folhas_diario.push(machu_picchu_descoberto);
  }

  folhas_diario.push("./assets/01_diario_sem_adesivos/quarta_capa_diario.png");
};

const handleDiarioPages = () => {
  if (choosen_diario === 1) {
    diario_seta_volta.src = "";
    diario_grande.src = folhas_diario[0];
    diario_seta_avanca.src = "./assets/botao_direito.png";
  } else if (choosen_diario === 2) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[1];
  } else if (choosen_diario === 3) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[2];
  } else if (choosen_diario === 4) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[3];
  } else if (choosen_diario === 5) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[4];
  } else if (choosen_diario === 6) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[5];
  } else if (choosen_diario === 7) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[6];
  } else if (choosen_diario === 8) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[7];
  } else if (choosen_diario === 9) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[8];
  } else if (choosen_diario === 10) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[9];
  } else if (choosen_diario === 11) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[10];
  } else if (choosen_diario === 12) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "./assets/botao_direito.png";
    diario_grande.src = folhas_diario[11];
  } else if (choosen_diario === 13) {
    diario_seta_volta.src = "./assets/botao_esquerdo.png";
    diario_seta_avanca.src = "";
    diario_grande.src = folhas_diario[12];
  }

  console.log(folhas_diario);
};

const handleDicasPages = () => {
  if (choosen_dica === 1) {
    dica_seta_volta.src = "";
    dica.src = folhas_dicas[0];
  } else if (choosen_dica === 2) {
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    dica_seta_avanca.src = "./assets/botao_direito.png";
    dica.src = folhas_dicas[1];
  } else if (choosen_dica === 3) {
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    dica_seta_avanca.src = "./assets/botao_direito.png";
    dica.src = folhas_dicas[2];
  } else if (choosen_dica === 4) {
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    dica_seta_avanca.src = "./assets/botao_direito.png";
    dica.src = folhas_dicas[3];
  } else if (choosen_dica === 5) {
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    dica_seta_avanca.src = "./assets/botao_direito.png";
    dica.src = folhas_dicas[4];
  } else if (choosen_dica === 6) {
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    dica_seta_avanca.src = "./assets/botao_direito.png";
    dica.src = folhas_dicas[5];
  } else if (choosen_dica === 7) {
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    dica_seta_avanca.src = "./assets/botao_direito.png";
    dica.src = folhas_dicas[6];
  } else if (choosen_dica === 8) {
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    dica_seta_avanca.src = "./assets/botao_direito.png";
    dica.src = folhas_dicas[7];
  } else if (choosen_dica === 9) {
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    dica_seta_avanca.src = "./assets/botao_direito.png";
    dica.src = folhas_dicas[8];
  } else if (choosen_dica === 10) {
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    dica_seta_avanca.src = "";
    dica.src = folhas_dicas[9];
  }
  console.log(choosen_dica);
};

dicas.addEventListener("click", () => {
  if (!dicas_clicked) {
    black_background.style.display = "flex";
    dicas.style.zIndex = "3";
    dicas_brilho.src = "./assets/03_dicas/dicas_contorno.png";
    dica_fechar.src = "./assets/botao_fechar.png";
    handleDicas();
    dicas_clicked = true;
    dica_seta_avanca.src = "./assets/botao_direito.png";
    dica_seta_volta.src = "./assets/botao_esquerdo.png";
    handleDicasPages();
  } else {
    black_background.style.display = "none";
    dicas.style.zIndex = "2";
    dicas_brilho.src = "";
    dicas_clicked = false;
    choosen_dica = 1;
    dica_seta_avanca.src = "";
    dica_seta_volta.src = "";
    dica.src = "";
    dica_fechar.src = "";
  }

  luneta_brilho.src = "";
  bussola_brilho.src = "";
  diario_brilho.src = "";
  luneta_clicked = false;
  bussola_clicked = false;
  diario_clicked = false;
});

dica_fechar.addEventListener("click", () => {
  black_background.style.display = "none";
  dicas.style.zIndex = "2";
  dicas_brilho.src = "";
  dicas_clicked = false;
  choosen_dica = 1;
  dica_seta_avanca.src = "";
  dica_seta_volta.src = "";
  dica.src = "";
  dica_fechar.src = "";
});

dica_seta_avanca.addEventListener("click", () => {
  if (choosen_dica >= 11) {
    return;
  }

  if (choosen_dica <= 10) {
    choosen_dica += 1;
    handleDicasPages();
  }
});

diario_seta_avanca.addEventListener("click", () => {
  console.log(choosen_diario);
  if (choosen_diario >= 13) {
    return;
  }

  if (choosen_diario <= 13) {
    choosen_diario += 1;
    handleDiarioPages();
  }
  console.log(choosen_diario);
});

diario_seta_volta.addEventListener("click", () => {
  if (choosen_diario <= 1) {
    return;
  }

  if (choosen_diario > 1) {
    choosen_diario -= 1;
    handleDiarioPages();
  }
});

dica_seta_volta.addEventListener("click", () => {
  if (choosen_dica <= 1) {
    return;
  }

  if (choosen_dica > 1) {
    choosen_dica -= 1;
    handleDicasPages();
  }
});

diario.addEventListener("click", () => {
  if (diario_clicked === false) {
    black_background.style.display = "flex";
    diario.style.zIndex = "3";
    diario_brilho.src =
      "./assets/04_diario_de_bordo/diario_de_bordo_contorno.png";
    diario_clicked = true;
    diario_fechar.src = "./assets/botao_fechar.png";

    handleDiario();

    luneta_brilho.src = "";
    bussola_brilho.src = "";
    dicas_brilho.src = "";
    luneta_clicked = false;
    bussola_clicked = false;
    dicas_clicked = false;

    handleDiarioPages();
  } else if (diario_clicked === true) {
    black_background.style.display = "none";
    diario.style.zIndex = "2";
    diario_brilho.src = "";
    diario_clicked = false;
    console.log(diario_clicked);
    diario_grande.src = "";
    diario_fechar.src = "";
    diario_seta_avanca.src = "";
    diario_seta_volta.src = "";
    choosen_diario = 1;
  }
});

diario_fechar.addEventListener("click", () => {
  black_background.style.display = "none";
  diario_grande.src = "";
  diario.style.zIndex = "2";
  diario_brilho.src = "";
  diario_clicked_clicked = false;
  choosen_diario = 1;
  diario_seta_avanca.src = "";
  diario_seta_volta.src = "";
  diario_fechar.src = "";
  diario_clicked = false;
});

const arrowKeyState = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

document.addEventListener("keydown", (event) => {
  if (luneta_clicked === false) {
    const arrowKey = event.key;

    if (!arrowKeyState[arrowKey]) {
      arrowKeyState[arrowKey] = true;

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
  }
});

document.addEventListener("keyup", (event) => {
  if (luneta_clicked === false) {
    const arrowKey = event.key;

    arrowKeyState[arrowKey] = false;

    if (arrowKeyState.ArrowUp) {
      balao.src = "./assets/balao/balao_costa.gif";
    } else if (arrowKeyState.ArrowDown) {
      balao.src = "./assets/balao/balao_frente.gif";
    } else if (arrowKeyState.ArrowRight) {
      balao.src = "./assets/balao/balao_direito.gif";
    } else if (arrowKeyState.ArrowLeft) {
      balao.src = "./assets/balao/balao_esquerdo.gif";
    } else {
      balao.src = "./assets/balao/balao_frente.gif";
    }
  }
});

estatua_liberdade.addEventListener("mouseenter", () => {
  estatua_liberdade_contorno.src =
    "./assets/botoes_lugares/estatua_liberdade/estatua_liberdade_contorno.png";
});

estatua_liberdade.addEventListener("mouseleave", () => {
  estatua_liberdade_contorno.src = "";
});

torre_eiffel.addEventListener("mouseenter", () => {
  torre_eiffel_contorno.src =
    "./assets/botoes_lugares/torre_eiffel/torre_eiffel_contorno.png";
  torre_eiffel_praca_contorno.src =
    "./assets/botoes_lugares/torre_eiffel/torre_eiffel_praca_contorno.png";
});
torre_eiffel_praca.addEventListener("mouseenter", () => {
  torre_eiffel_contorno.src =
    "./assets/botoes_lugares/torre_eiffel/torre_eiffel_contorno.png";
  torre_eiffel_praca_contorno.src =
    "./assets/botoes_lugares/torre_eiffel/torre_eiffel_praca_contorno.png";
});

torre_eiffel.addEventListener("mouseleave", () => {
  torre_eiffel_contorno.src = "";
  torre_eiffel_praca_contorno.src = "";
});
torre_eiffel_praca.addEventListener("mouseleave", () => {
  torre_eiffel_contorno.src = "";
  torre_eiffel_praca_contorno.src = "";
});

piramide_teotihuacan.addEventListener("mouseenter", () => {
  piramide_teotihuacan_contorno.src =
    "./assets/botoes_lugares/piramide_de_teotihuacan/piramide_de_teotihuacan_contorno.png";
  piramide_teotihuacan_moita_terra_contorno.src =
    "./assets/botoes_lugares/piramide_de_teotihuacan/moita_terra_contorno.png";
});
piramide_teotihuacan_moita_terra.addEventListener("mouseenter", () => {
  piramide_teotihuacan_contorno.src =
    "./assets/botoes_lugares/piramide_de_teotihuacan/piramide_de_teotihuacan_contorno.png";
  piramide_teotihuacan_moita_terra_contorno.src =
    "./assets/botoes_lugares/piramide_de_teotihuacan/moita_terra_contorno.png";
});

piramide_teotihuacan.addEventListener("mouseleave", () => {
  piramide_teotihuacan_contorno.src = "";
  piramide_teotihuacan_moita_terra_contorno.src = "";
});
piramide_teotihuacan_moita_terra.addEventListener("mouseleave", () => {
  piramide_teotihuacan_contorno.src = "";
  piramide_teotihuacan_moita_terra_contorno.src = "";
});

machu_pichu.addEventListener("mouseenter", () => {
  machu_pichu_contorno.src =
    "./assets/botoes_lugares/machu_picchu/machu_picchu_contorno.png";
  machu_pichu_terras_contorno.src =
    "./assets/botoes_lugares/machu_picchu/terras_contorno.png";
  machu_pichu_moitas_contorno.src =
    "./assets/botoes_lugares/machu_picchu/moitas_contorno.png";
});
machu_pichu_terras.addEventListener("mouseenter", () => {
  machu_pichu_contorno.src =
    "./assets/botoes_lugares/machu_picchu/machu_picchu_contorno.png";
  machu_pichu_terras_contorno.src =
    "./assets/botoes_lugares/machu_picchu/terras_contorno.png";
  machu_pichu_moitas_contorno.src =
    "./assets/botoes_lugares/machu_picchu/moitas_contorno.png";
});
machu_pichu_moitas.addEventListener("mouseenter", () => {
  machu_pichu_contorno.src =
    "./assets/botoes_lugares/machu_picchu/machu_picchu_contorno.png";
  machu_pichu_terras_contorno.src =
    "./assets/botoes_lugares/machu_picchu/terras_contorno.png";
  machu_pichu_moitas_contorno.src =
    "./assets/botoes_lugares/machu_picchu/moitas_contorno.png";
});

machu_pichu.addEventListener("mouseleave", () => {
  machu_pichu_moitas_contorno.src = "";
  machu_pichu_terras_contorno.src = "";
  machu_pichu_contorno.src = "";
});

machu_pichu_moitas.addEventListener("mouseleave", () => {
  machu_pichu_moitas_contorno.src = "";
  machu_pichu_terras_contorno.src = "";
  machu_pichu_contorno.src = "";
});

machu_pichu_terras.addEventListener("mouseleave", () => {
  machu_pichu_moitas_contorno.src = "";
  machu_pichu_terras_contorno.src = "";
  machu_pichu_contorno.src = "";
});

piramides_gize.addEventListener("mouseenter", () => {
  piramides_gize_contorno.src =
    "./assets/botoes_lugares/piramides_gize/piramides_contorno.png";
});

piramides_gize.addEventListener("mouseleave", () => {
  piramides_gize_contorno.src = "";
});

machu_pichu.addEventListener("mouseleave", () => {
  machu_pichu_moitas_contorno.src = "";
  machu_pichu_terras_contorno.src = "";
  machu_pichu_contorno.src = "";
});

big_ben.addEventListener("mouseenter", () => {
  big_ben_contorno.src = "./assets/botoes_lugares/big_ben/big_ben_contorno.png";
  big_ben_bus_contorno.src =
    "./assets/botoes_lugares/big_ben/onibus_contorno.png";
});
big_ben_bus.addEventListener("mouseenter", () => {
  big_ben_contorno.src = "./assets/botoes_lugares/big_ben/big_ben_contorno.png";
  big_ben_bus_contorno.src =
    "./assets/botoes_lugares/big_ben/onibus_contorno.png";
});

big_ben.addEventListener("mouseleave", () => {
  big_ben_contorno.src = "";
  big_ben_bus_contorno.src = "";
});
big_ben_bus.addEventListener("mouseleave", () => {
  big_ben_contorno.src = "";
  big_ben_bus_contorno.src = "";
});

torre_pisa.addEventListener("mouseenter", () => {
  torre_pisa_contorno.src =
    "./assets/botoes_lugares/torre_pisa/torre_pisa_contorno.png";
});

torre_pisa.addEventListener("mouseleave", () => {
  torre_pisa_contorno.src = "";
});

taj_mahal.addEventListener("mouseenter", () => {
  taj_mahal_contorno.src =
    "./assets/botoes_lugares/taj_mahal/taj_mahal_contorno.png";
  taj_mahal_torres_contorno.src =
    "./assets/botoes_lugares/taj_mahal/torres_contorno.png";
});

taj_mahal_torres.addEventListener("mouseenter", () => {
  taj_mahal_contorno.src =
    "./assets/botoes_lugares/taj_mahal/taj_mahal_contorno.png";
  taj_mahal_torres_contorno.src =
    "./assets/botoes_lugares/taj_mahal/torres_contorno.png";
});

taj_mahal.addEventListener("mouseleave", () => {
  taj_mahal_contorno.src = "";
  taj_mahal_torres_contorno.src = "";
});

taj_mahal_torres.addEventListener("mouseleave", () => {
  taj_mahal_contorno.src = "";
  taj_mahal_torres_contorno.src = "";
});

monte_fuji.addEventListener("mouseenter", () => {
  monte_fuji_contorno.src =
    "./assets/botoes_lugares/monte_fuji/monte_fuji_contorno.png";
});

monte_fuji.addEventListener("mouseleave", () => {
  monte_fuji_contorno.src = "";
});

opera_sidney.addEventListener("mouseenter", () => {
  opera_sidney_contorno.src =
    "./assets/botoes_lugares/opera_sydney/opera_de_sydney_contorno.png";
});

opera_sidney.addEventListener("mouseleave", () => {
  opera_sidney_contorno.src = "";
});

const bussolaPonteiro = document.querySelector(".bussola_ponteiro");

function atualizarDirecaoBussola() {
  const mapaRetangulo = mapa_mundi.getBoundingClientRect();
  const centroX = mapaRetangulo.left + mapaRetangulo.width / 2;
  const centroY = mapaRetangulo.top + mapaRetangulo.height / 2;

  const balaoRetangulo = balao.getBoundingClientRect();
  const balaoX = balaoRetangulo.left + balaoRetangulo.width / 2;
  const balaoY = balaoRetangulo.top + balaoRetangulo.height / 2;

  const deltaX = balaoX - centroX;
  const deltaY = balaoY - centroY;

  const radianos = Math.atan2(deltaY, deltaX);
  const graus = (radianos * 180) / Math.PI;

  bussolaPonteiro.style.transform = `rotate(${graus + 90}deg)`;
}
