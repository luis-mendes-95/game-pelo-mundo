let canMove = true;
let blackBackground = false;

//FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DA DIV "calculoBussola" - INÍCIO //
document.addEventListener("DOMContentLoaded", () => {
  const balao = document.querySelector(".balao");
  const mapa = document.querySelector(".mapa");
  const localizacao = document.getElementById("local");
  let [balaoX, balaoY, mapaX, mapaY] = [42, 25, 10, -30];
  const vwIncrement = 0.05;

  balao.src = "./assets/balao/balao_direito.gif";

  const checkLocal = () => {
    if (balaoY <= 17 && balaoX >= 35 && balaoX >= 35 && balaoX <= 53) {
      localizacao.value = "Norte";
    } else if (balaoX <= 53 && balaoX >= 35 && balaoY > 27) {
      localizacao.value = "Sul";
    } else if (balaoY <= 18 && balaoX <= 35) {
      localizacao.value = "Noroeste";
    } else if (balaoX >= 53 && balaoY <= 17) {
      localizacao.value = "Nordeste";
    } else if (balaoX >= 53 && balaoY >= 17 && balaoY <= 27) {
      localizacao.value = "Leste";
    } else if (balaoX >= 53 && balaoY >= 27) {
      localizacao.value = "Sudeste";
    } else if (balaoY >= 27 && balaoX <= 35) {
      localizacao.value = "Sudoeste";
    } else if (balaoY <= 27 && balaoX <= 35 && balaoY >= 17) {
      localizacao.value = "Oeste";
    } else if (balaoY >= 17 && balaoY <= 27 && balaoX <= 53 && balaoX >= 35) {
      local.value = "NorteMeio";
    }
  };

  const updateBalaoPosition = () => {
    if (canMove) {
      [balao.style.left, balao.style.top] = [`${balaoX}vw`, `${balaoY}vw`];
      [mapa.style.left, mapa.style.top] = [`${mapaX}vw`, `${mapaY}vw`];
      ["balaoX", "balaoY"].forEach(
        (el, idx) => (document.getElementById(el).value = [balaoX, balaoY][idx])
      );
      checkLocal();
      const bussola_ponteiro = document.querySelector(".bussola_ponteiro");
      if (bussola_ponteiro) {
        const pontoCardeal = local.value;
        switch (pontoCardeal) {
          case "NorteMeio":
            bussola_ponteiro.style.transform = `rotate(${90}deg)`;
            break;
          case "Norte":
            bussola_ponteiro.style.transform = `rotate(${90}deg)`;
            break;
          case "Nordeste":
            bussola_ponteiro.style.transform = `rotate(${135}deg)`;
            break;
          case "Leste":
            bussola_ponteiro.style.transform = `rotate(${180}deg)`;
            break;
          case "Sudeste":
            bussola_ponteiro.style.transform = `rotate(${225}deg)`;
            break;
          case "Sul":
            bussola_ponteiro.style.transform = `rotate(${270}deg)`;
            break;
          case "Sudoeste":
            bussola_ponteiro.style.transform = `rotate(${-45}deg)`;
            break;
          case "Oeste":
            bussola_ponteiro.style.transform = `rotate(${0}deg)`;
            break;
          case "Noroeste":
            bussola_ponteiro.style.transform = `rotate(${45}deg)`;
            break;
          default:
            bussola_ponteiro.style.transform = `rotate(${90}deg)`;
        }
      }
    }
  };

  const keyState = {};

  document.addEventListener("keydown", (e) => {
    keyState[e.key] = true;
  });
  document.addEventListener("keyup", (e) => {
    keyState[e.key] = false;
  });

  const moveBalao = () => {
    if (keyState["ArrowUp"] && balaoY >= 1) {
      [balaoY, mapaY] = [balaoY - vwIncrement, mapaY + vwIncrement * 5];
    }
    if (keyState["ArrowDown"] && balaoY <= 40) {
      [balaoY, mapaY] = [balaoY + vwIncrement, mapaY - vwIncrement * 5];
    }
    if (keyState["ArrowLeft"] && balaoX >= 1) {
      [balaoX, mapaX] = [balaoX - vwIncrement, mapaX + vwIncrement * 5];
    }
    if (keyState["ArrowRight"] && balaoX <= 90) {
      [balaoX, mapaX] = [balaoX + vwIncrement, mapaX - vwIncrement * 5];
    }

    updateBalaoPosition();
    requestAnimationFrame(moveBalao);
  };

  moveBalao();
});
//FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DA DIV "calculoBussola" - FIM //



//FUNÇÕES DE EFEITOS DE BOTÕES DA DASHBOARD - INICIO //
document.addEventListener("DOMContentLoaded", function () {

  const dashboard = document.querySelector(".dashboard");
  const container = document.querySelector(".container");
  const mapa = document.querySelector(".mapa");
  const local = document.getElementById("local");

  const luneta_brilho = document.createElement("img");
  luneta_brilho.classList.add("luneta_brilho");
  const luneta = dashboard.querySelector(".luneta");
  let luneta_clicked = false;
  luneta_brilho.src = "";

  const bussola_brilho = document.createElement("img");
  bussola_brilho.classList.add("bussola_brilho");
  const bussola = dashboard.querySelector(".bussolaDash");
  let bussola_clicked = false;
  bussola_brilho.src = "";

  const dicas_brilho = document.createElement("img");
  dicas_brilho.classList.add("dicas_brilho");
  const dicas = dashboard.querySelector(".dicas");
  let dicas_clicked = false;
  dicas_brilho.src = "";

  const diarioDeBordo_brilho = document.createElement("img");
  diarioDeBordo_brilho.classList.add("diarioDeBordo_brilho");
  const diarioDeBordo = dashboard.querySelector(".diarioDeBordo");
  let diarioDeBordo_clicked = false;
  diarioDeBordo_brilho.src = "";

  const set_black_background = (botao) => {
    if(botao === "dicas") {
      if(blackBackground === false) {
        canMove = false;
        blackBackground = true;
        let black_background = document.createElement("div");
        black_background.classList.add("black_background");
        dicas.style.zIndex = "12"
        dicas_brilho.style.zIndex = "11"
        container.appendChild(black_background);
      } else if (blackBackground === true){
        canMove = true;
        blackBackground = false;
        let existing_background = document.querySelector(".black_background");
        if(existing_background){
          container.removeChild(existing_background)
          dicas.style.zIndex = "10"
          dicas_brilho.style.zIndex = "9"
        }
      } 
    } else if (botao === "diario") {
      if(blackBackground === false) {
        canMove = false;
        blackBackground = true;
        let black_background = document.createElement("div");
        black_background.classList.add("black_background");
        diarioDeBordo.style.zIndex = "12"
        diarioDeBordo_brilho.style.zIndex = "11"
        container.appendChild(black_background);
      } else if (blackBackground === true){
        canMove = true;
        blackBackground = false;
        let existing_background = document.querySelector(".black_background");
        if(existing_background){
          container.removeChild(existing_background)
          diarioDeBordo.style.zIndex = "10"
          diarioDeBordo_brilho.style.zIndex = "9"
        }
      } 
    }
  }

  function toggleBrilho(clicked, brilho, brilhoSrc) {
    if (clicked === false) {
      luneta_clicked = false;
      bussola_clicked = false;
      dicas_clicked = false;
      diarioDeBordo_clicked = false;

      luneta_brilho.src = "";
      bussola_brilho.src = "";
      dicas_brilho.src = "";
      diarioDeBordo_brilho.src = "";

      if (container.contains(luneta_brilho)) {
        container.removeChild(luneta_brilho);
      }
      if (container.contains(bussola_brilho)) {
        container.removeChild(bussola_brilho);
      }
      if (container.contains(dicas_brilho)) {
        container.removeChild(dicas_brilho);
      }
      if (container.contains(diarioDeBordo_brilho)) {
        container.removeChild(diarioDeBordo_brilho);
      }

      clicked = true;
      brilho.src = brilhoSrc;
      container.appendChild(brilho);
    } else {
      clicked = false;
      brilho.src = "";
      if (container.contains(brilho)) {
        container.removeChild(brilho);
      }
    }
    return clicked;
  }

  luneta.addEventListener("click", () => {
    luneta_clicked = toggleBrilho(
      luneta_clicked,
      luneta_brilho,
      "./assets/01_luneta/luneta_contorno.png"
    );
    if (luneta_clicked === true) {
      mapa.style.scale = "2.5";
      console.log(local.value);
      canMove = false;

      if (local.value === "Norte") {
        mapa.style.marginTop = "-60vw";
      } else if (local.value === "Noroeste") {
        (mapa.style.marginLeft = "-100vw"), (mapa.style.marginTop = "-60vw");
      } else if (local.value === "Oeste") {
        mapa.style.marginLeft = "-100vw";
      } else if (local.value === "Sudoeste") {
        (mapa.style.marginBottom = "-80vw"), (mapa.style.marginLeft = "-100vw");
      } else if (local.value === "Sul") {
        mapa.style.marginBottom = "-80vw";
      } else if (local.value === "Sudeste") {
        (mapa.style.marginRight = "-140vw", mapa.style.marginBottom = "80vw"),
          (mapa.style.marginBottom = "-80vw");
      } else if (local.value === "Leste") {
        mapa.style.marginRight = "-140vw";
      } else if (local.value === "Nordeste") {
        (mapa.style.marginRight = "-140vw"), (mapa.style.marginTop = "-60vw");
      }

      let existing_bussola = document.querySelector(".bussola_fundo");
      let existing_bussola_ponteiro =
        document.querySelector(".bussola_ponteiro");
      let existing_bussola_circulo = document.querySelector(".bussola_circulo");

      if (existing_bussola) {
        container.removeChild(existing_bussola);
        container.removeChild(existing_bussola_ponteiro);
        container.removeChild(existing_bussola_circulo);
      }
    } else if (luneta_clicked === false) {
      canMove = true;
      mapa.style.scale = "5";
      mapa.style.marginTop = "0";
      mapa.style.marginLeft = "0";
      mapa.style.marginRight = "0";
      mapa.style.marginBottom = "0";


    }
  });

  bussola.addEventListener("click", () => {
    if(luneta_clicked === false) {
      bussola_clicked = toggleBrilho(
        bussola_clicked,
        bussola_brilho,
        "./assets/02_bussola/bussola_contorno.png"
      );
  
      if (bussola_clicked === true) {
        const bussola_fundo = document.createElement("img");
        const bussola_ponteiro = document.createElement("img");
        const bussola_circulo = document.createElement("img");
  
        bussola_fundo.classList.add("bussola_fundo");
        bussola_ponteiro.classList.add("bussola_ponteiro");
        bussola_circulo.classList.add("bussola_circulo");
  
        bussola_fundo.src = "./assets/bussola_grande/bussola_aumentada.png";
        bussola_ponteiro.src = "./assets/bussola_grande/ponteiro.png";
        bussola_circulo.src = "./assets/bussola_grande/circulo.png";
  
        container.append(bussola_fundo, bussola_ponteiro, bussola_circulo);
      } else if (bussola_clicked === false) {
        let existing_bussola = document.querySelector(".bussola_fundo");
        let existing_bussola_ponteiro =
          document.querySelector(".bussola_ponteiro");
        let existing_bussola_circulo = document.querySelector(".bussola_circulo");
  
        if (existing_bussola) {
          container.removeChild(existing_bussola);
          container.removeChild(existing_bussola_ponteiro);
          container.removeChild(existing_bussola_circulo);
        }
      }
    }
  });

  dicas.addEventListener("click", () => {
    dicas_clicked = toggleBrilho(
      dicas_clicked,
      dicas_brilho,
      "./assets/03_dicas/dicas_contorno.png"
    );
    set_black_background("dicas");
  });

  diarioDeBordo.addEventListener("click", () => {
    diarioDeBordo_clicked = toggleBrilho(
      diarioDeBordo_clicked,
      diarioDeBordo_brilho,
      "./assets/04_diario_de_bordo/diario_de_bordo_contorno.png"
    );
    set_black_background("diario");
  });

});
//FUNÇÕES DE EFEITOS DE BOTÕES DA DASHBOARD - FIM //



//FUNÇÕES QUE INSEREM OS BOTÕES PELO MAPA - INICIO//
document.addEventListener("DOMContentLoaded", function () {
  const botoes_lugares = [
    {
      name: "estatuaLiberdade",
      src: "./assets/",
      localX: 5,
      localY: 5,
      brilhoSrc: "./assets/",
      brilhoX: 5,
      brilhoY: 5
    }
  ]
});
//FUNÇÕES QUE INSEREM OS BOTÕES PELO MAPA - FIM//