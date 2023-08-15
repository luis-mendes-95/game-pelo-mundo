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





const estatua_liberdade = document.querySelector(".estatua_liberdade");
const estatua_liberdade_contorno = document.querySelector(".estatua_liberdade_contorno");





const torre_eiffel = document.querySelector(".torre_eiffel");
const torre_eiffel_contorno = document.querySelector(".torre_eiffel_contorno");
const torre_eiffel_praca = document.querySelector(".torre_eiffel_praca");
const torre_eiffel_praca_contorno = document.querySelector(".torre_eiffel_praca_contorno");




const piramide_teotihuacan_moita_terra = document.querySelector(".piramide_teotihuacan_moita_terra");
const piramide_teotihuacan = document.querySelector(".piramide_teotihuacan");
const piramide_teotihuacan_contorno = document.querySelector(".piramide_teotihuacan_contorno")
const piramide_teotihuacan_moita_terra_contorno = document.querySelector(".piramide_teotihuacan_moita_terra_contorno");






const machu_pichu = document.querySelector(".machu_pichu")
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



const torre_pisa = document.querySelector(".torre_pisa")
const torre_pisa_contorno = document.querySelector(".torre_pisa_contorno")





const monte_fuji = document.querySelector(".monte_fuji")
const monte_fuji_contorno = document.querySelector(".monte_fuji_contorno")



const taj_mahal = document.querySelector(".taj_mahal");
const taj_mahal_contorno = document.querySelector(".taj_mahal_contorno");
const taj_mahal_torres = document.querySelector(".taj_mahal_torres");
const taj_mahal_torres_contorno = document.querySelector(".taj_mahal_torres_contorno");




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

  if (luneta_clicked === false) {
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
  }

});

document.addEventListener("keyup", event => {

  if (luneta_clicked === false) {
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
  }

});

estatua_liberdade.addEventListener("mouseenter", () => {

  estatua_liberdade_contorno.src="./assets/botoes_lugares/estatua_liberdade/estatua_liberdade_contorno.png"

})

estatua_liberdade.addEventListener("mouseleave", () => {
  estatua_liberdade_contorno.src = ""
})

torre_eiffel.addEventListener("mouseenter", () => {

  torre_eiffel_contorno.src="./assets/botoes_lugares/torre_eiffel/torre_eiffel_contorno.png"
  torre_eiffel_praca_contorno.src="./assets/botoes_lugares/torre_eiffel/torre_eiffel_praca_contorno.png"

})

torre_eiffel.addEventListener("mouseleave", () => {
  torre_eiffel_contorno.src = ""
  torre_eiffel_praca_contorno.src = ""
})

piramide_teotihuacan.addEventListener("mouseenter", () => {

  piramide_teotihuacan_contorno.src="./assets/botoes_lugares/piramide_de_teotihuacan/piramide_de_teotihuacan_contorno.png"
  piramide_teotihuacan_moita_terra_contorno.src="./assets/botoes_lugares/piramide_de_teotihuacan/moita_terra_contorno.png"

})

piramide_teotihuacan.addEventListener("mouseleave", () => {
  piramide_teotihuacan_contorno.src = ""
  piramide_teotihuacan_moita_terra_contorno.src = ""
})

machu_pichu.addEventListener("mouseenter", () => {

  machu_pichu_contorno.src="./assets/botoes_lugares/machu_picchu/machu_picchu_contorno.png"
  machu_pichu_terras_contorno.src="./assets/botoes_lugares/machu_picchu/terras_contorno.png"
  machu_pichu_moitas_contorno.src="./assets/botoes_lugares/machu_picchu/moitas_contorno.png"

})

machu_pichu.addEventListener("mouseleave", () => {
  machu_pichu_moitas_contorno.src = ""
  machu_pichu_terras_contorno.src = ""
  machu_pichu_contorno.src = ""
})

piramides_gize.addEventListener("mouseenter", () => {

  piramides_gize_contorno.src="./assets/botoes_lugares/piramides_gize/piramides_contorno.png"


})

piramides_gize.addEventListener("mouseleave", () => {
  piramides_gize_contorno.src = ""
})

machu_pichu.addEventListener("mouseleave", () => {
  machu_pichu_moitas_contorno.src = ""
  machu_pichu_terras_contorno.src = ""
  machu_pichu_contorno.src = ""
})

big_ben.addEventListener("mouseenter", () => {

  big_ben_contorno.src="./assets/botoes_lugares/big_ben/big_ben_contorno.png"
  big_ben_bus_contorno.src="./assets/botoes_lugares/big_ben/onibus_contorno.png"


})

big_ben.addEventListener("mouseleave", () => {
  big_ben_contorno.src = ""
  big_ben_bus_contorno.src = ""
})

torre_pisa.addEventListener("mouseenter", () => {

  torre_pisa_contorno.src="./assets/botoes_lugares/torre_pisa/torre_pisa_contorno.png"



})

torre_pisa.addEventListener("mouseleave", () => {
  torre_pisa_contorno.src = ""
})

taj_mahal.addEventListener("mouseenter", () => {

  taj_mahal_contorno.src="./assets/botoes_lugares/taj_mahal/taj_mahal_contorno.png"
  taj_mahal_torres_contorno.src="./assets/botoes_lugares/taj_mahal/torres_contorno.png"



})

taj_mahal.addEventListener("mouseleave", () => {
  taj_mahal_contorno.src = ""
  taj_mahal_torres_contorno.src = ""
})

monte_fuji.addEventListener("mouseenter", () => {

  monte_fuji_contorno.src="./assets/botoes_lugares/monte_fuji/monte_fuji_contorno.png"



})

monte_fuji.addEventListener("mouseleave", () => {

  monte_fuji_contorno.src = ""
})

opera_sidney.addEventListener("mouseenter", () => {

  opera_sidney_contorno.src="./assets/botoes_lugares/opera_sydney/opera_de_sydney_contorno.png"



})

opera_sidney.addEventListener("mouseleave", () => {

  opera_sidney_contorno.src = ""
})