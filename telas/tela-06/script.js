let canMove = true;
let blackBackground = false;
const container = document.querySelector(".container");
const mapa = document.querySelector(".mapa");

//FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DA DIV "calculoBussola" - INÍCIO //
document.addEventListener("DOMContentLoaded", () => {

  //CAPTURA DOS ELEMENTOS NO HTML
  const balao = document.querySelector(".balao");
  const mapa = document.querySelector(".mapa");
  const localizacao = document.getElementById("local");

  //DEFINE A LOCALIZAÇÃO DO BALÃO NA TELA E NO MAPA
  let [balaoX, balaoY, mapaX, mapaY] = [42, 24, 10, -30];

  //INCREMENTO DE "VW" A INCREMENTAR PARA GERAR O MOVIMENTO
  const vwIncrement = 0.5; //ORIGINAL 0.05

  //SPRITE DO BALÃO
  balao.src = "./assets/balao/balao_direito.gif";

  //CAPTURA DA LOCALIZAÇÃO DO BALÃO E DEFININDO LOCAL GEOGRÁFICO
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

  //ATUALIZA A POSIÇÃO DO BALÃO NA TELA
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

  //TECLAS QUE ESTÃO SENDO APERTADAS
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

  //CAPTURA DE ELEMENTOS
  const dashboard = document.querySelector(".dashboard");


  const local = document.getElementById("local");

  //LUNETA
  const luneta_brilho = document.createElement("img");
  luneta_brilho.classList.add("luneta_brilho");
  const luneta = dashboard.querySelector(".luneta");
  let luneta_clicked = false;
  luneta_brilho.src = "";

  //BÚSSOLA
  const bussola_brilho = document.createElement("img");
  bussola_brilho.classList.add("bussola_brilho");
  const bussola = dashboard.querySelector(".bussolaDash");
  let bussola_clicked = false;
  bussola_brilho.src = "";

  //DICAS
  const dicas_brilho = document.createElement("img");
  dicas_brilho.classList.add("dicas_brilho");
  const dicas = dashboard.querySelector(".dicas");
  let dicas_clicked = false;
  dicas_brilho.src = "";

  //DIARIO DE BORDO
  const diarioDeBordo_brilho = document.createElement("img");
  diarioDeBordo_brilho.classList.add("diarioDeBordo_brilho");
  const diarioDeBordo = dashboard.querySelector(".diarioDeBordo");
  let diarioDeBordo_clicked = false;
  diarioDeBordo_brilho.src = "";

  //FUNDO PRETO QUE APARECE QUANDO CLICA EM DICAS E DIARIO
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

  //FUNÇÃO QUE ALTERA ESTADO DO BRILHO DOS ITENS CLICADOS
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

  //LUNETA FUNCIONALIDADES DE CLIQUE
  luneta.addEventListener("click", () => {
    luneta_clicked = toggleBrilho(
      luneta_clicked,
      luneta_brilho,
      "./assets/01_luneta/luneta_contorno.png"
    );
    if (luneta_clicked === true) {

      canMove = false;

      if (local.value === "Norte") {
        mapa.style.scale = "2.6";
        mapa.style.left = "2vw";
        mapa.style.top = "21.5vw";
      } else if (local.value === "Noroeste") {
        mapa.style.scale = "2";
        mapa.style.left = "50vw";
        mapa.style.top = "15.5vw";
      } else if (local.value === "Oeste") {
        mapa.style.scale = "2.7";
        mapa.style.left = "73vw";
        mapa.style.top = "-11.5vw";
      } else if (local.value === "Sudoeste") {
        mapa.style.scale = "2.7";
        mapa.style.left = "73vw";
        mapa.style.top = "-42.5vw";
      } else if (local.value === "Sul") {
        mapa.style.scale = "2.7";
        mapa.style.left = "3vw";
        mapa.style.top = "-47.5vw";
      } else if (local.value === "Sudeste") {
        mapa.style.scale = "2.3";
        mapa.style.left = "-60vw";
        mapa.style.top = "-38.5vw";
      } else if (local.value === "Leste") {
        mapa.style.scale = "2.5";
        mapa.style.left = "-67vw";
        mapa.style.top = "-12.5vw";
      } else if (local.value === "Nordeste") {
        mapa.style.scale = "2.1";
        mapa.style.left = "-54vw";
        mapa.style.top = "16.5vw";
      } else if (local.value === "NorteMeio") {
        mapa.style.scale = "3.4";
        mapa.style.left = "2vw";
        mapa.style.top = "-14.5vw"
      }

      let existing_bussola = document.querySelector(".bussola_fundo");
      let existing_bussola_ponteiro = document.querySelector(".bussola_ponteiro");
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


  //BUSSOLA FUNCIONALIDADES DE CLIQUE
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


  //DICAS FUNCIONALIDADES DE CLIQUE
  dicas.addEventListener("click", () => {
    dicas_clicked = toggleBrilho(
      dicas_clicked,
      dicas_brilho,
      "./assets/03_dicas/dicas_contorno.png"
    );
    set_black_background("dicas");
  });


  //DIARIO FUNCIONALIDADES DE CLIQUE
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
      name: "piramidesGize",
      src: "./assets/botoes_lugares/piramides_gize/piramides_de_gize.png",
      srcBrilho: "./assets/botoes_lugares/piramides_gize/piramides_contorno.png",
      localX: 47,
      localY: 16,
      brilhoX: 47,
      brilhoY: 16,
      width: "5vw",
      brilhoWidth: "5vw",
      scale: "scale(1.1)"
    },
    {
      name: "torrePisa",
      src: "./assets/botoes_lugares/torre_pisa/torre_pisa.png",
      srcBrilho: "./assets/botoes_lugares/torre_pisa/torre_pisa_contorno.png",
      localX: 47.47,
      localY: 7.9,
      brilhoX: 47.46,
      brilhoY: 7.9,
      width: "1.30vw",
      brilhoWidth: "1.35vw",
      scale: "scale(1.13)"
    },
    {
      name: "torreEiffel",
      src: "./assets/botoes_lugares/torre_eiffel/torre_eiffel.png",
      srcBrilho: "./assets/botoes_lugares/torre_eiffel/torre_eiffel_contorno.png",
      localX: 44,
      localY: 5.9,
      brilhoX: 44.2,
      brilhoY: 6.2,
      width: "2.3vw",
      brilhoWidth: "1.9vw",
      scale: "scale(1.29)"
    },
    {
      name: "bigBen",
      src: "./assets/botoes_lugares/big_ben/big_ben.png",
      srcBrilho: "./assets/botoes_lugares/big_ben/big_ben_contorno.png",
      localX: 41.2,
      localY: 2.6,
      brilhoX: 41.33,
      brilhoY: 2.84,
      width: "2.3vw",
      brilhoWidth: "2.05vw",
      scale: "scale(1.21)"
    },
    {
      name: "estatuaLiberdade",
      src: "./assets/botoes_lugares/estatua_liberdade/estatua_liberdade.png",
      srcBrilho: "./assets/botoes_lugares/estatua_liberdade/estatua_liberdade_contorno.png",
      localX: 28,
      localY: 5.5,
      brilhoX: 28.1,
      brilhoY: 6.1,
      width: "2.3vw",
      brilhoWidth: "2vw",
      scale: "scale(1.25)"
    },
    {
      name: "piramideTeotihuacan",
      src: "./assets/botoes_lugares/piramide_de_teotihuacan/piramide_teotihuacan.png",
      srcBrilho: "./assets/botoes_lugares/piramide_de_teotihuacan/piramide_teotihuacan_contorno.png",
      localX: 23.3,
      localY: 15.2,
      brilhoX: 23.7,
      brilhoY: 15.4,
      width: "5vw",
      brilhoWidth: "4.13vw",
      scale: "scale(1.27)"
    },
    {
      name: "machu_picchu",
      src: "./assets/botoes_lugares/machu_picchu/machu_pichu.png",
      srcBrilho: "./assets/botoes_lugares/machu_picchu/machu_pichu_contorno.png",
      localX: 29.9,
      localY: 23.2,
      brilhoX: 30.4,
      brilhoY: 23.5,
      width: "5vw",
      brilhoWidth: "4.2vw",
      scale: "scale(1.27)"
    },
    {
      name: "taj_mahal",
      src: "./assets/botoes_lugares/taj_mahal/taj_mahal.png",
      srcBrilho: "./assets/botoes_lugares/taj_mahal/taj_mahal_contorno.png",
      localX: 61,
      localY: 13,
      brilhoX: 61.6,
      brilhoY: 13.5,
      width: "5vw",
      brilhoWidth: "3.9vw",
      scale: "scale(1.3)"
    },
    {
      name: "opera_sydney",
      src: "./assets/botoes_lugares/opera_sydney/opera_de_sydney.png",
      srcBrilho: "./assets/botoes_lugares/opera_sydney/opera_de_sydney_contorno.png",
      localX: 74,
      localY: 28,
      brilhoX: 74.3,
      brilhoY: 28,
      width: "5vw",
      brilhoWidth: "4.5vw",
      scale: "scale(1.2)"
    },
    {
      name: "monte_fuji",
      src: "./assets/botoes_lugares/monte_fuji/monte_fuji.png",
      srcBrilho: "./assets/botoes_lugares/monte_fuji/monte_fuji_contorno.png",
      localX: 76,
      localY: 14.1,
      brilhoX: 76.3,
      brilhoY: 14.2,
      width: "5vw",
      brilhoWidth: "4.5vw",
      scale: "scale(1.2)"
    },
  ]

  const render_buttons = () => {
    botoes_lugares.forEach((button)=>{

      const botao = document.createElement("img");
      const contorno = document.createElement("img");

      botao.classList.add(`${button.name}`);
      contorno.classList.add(`${button.name}Contorno`);

      botao.src = button.src
      contorno.src = button.srcBrilho

      botao.style.width = button.width
      botao.style.position = `absolute`
      botao.style.left = `${button.localX}vw`
      botao.style.top = `${button.localY}vw`
      botao.style.zIndex = `3`

      contorno.style.width = button.brilhoWidth
      contorno.style.transform = button.scale
      contorno.style.position = `absolute`
      contorno.style.left = `${button.brilhoX}vw`
      contorno.style.top = `${button.brilhoY}vw` 
      contorno.style.zIndex = `2`

      botao.addEventListener("mouseenter", () => {
        botao.style.cursor = "pointer";
        const contorno_existente = document.querySelector(`.${button.name}Contorno`)
        if (!contorno_existente){
          mapa.appendChild(contorno)
        }
      });

      botao.addEventListener("mouseleave", function() {
        const contorno_existente = document.querySelector(`.${button.name}Contorno`)
        mapa.removeChild(contorno_existente)
      });



      mapa.appendChild(botao);
    })
  }

  render_buttons();

});
//FUNÇÕES QUE INSEREM OS BOTÕES PELO MAPA - FIM//