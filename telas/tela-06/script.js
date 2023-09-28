//VARIÁVEIS GLOBAIS - INICIO//
let canMove = true;
let blackBackground = false;
const container = document.querySelector(".container");
const mapa = document.querySelector(".mapa");
//VARIÁVEIS GLOBAIS - FIM//




//FUNÇÕES GLOBAIS - INICIO//

//FUNDO PRETO DINAMICO QUE PODE SER CHAMADO POR QUALQUER UM
const set_black_background = (botao) => {

    if(botao === "dicas") {
      console.log(blackBackground)
      if(blackBackground === false) {
        const dicas = document.querySelector(".dicas");
        const dicas_brilho = document.querySelector(".dicas_brilho");
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
        let diarioDeBordo = document.querySelector(".diarioDeBordo");
        let diarioDeBordo_brilho = document.querySelector(".diarioDeBordo_brilho");
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
    } else {
      if(blackBackground === false) {
        canMove = false;
        blackBackground = true;
        let black_background = document.createElement("div");
        black_background.classList.add("black_background");
        container.appendChild(black_background);
      } else if (blackBackground === true){
        canMove = true;
        blackBackground = false;
        let existing_background = document.querySelector(".black_background");
        if(existing_background){
          container.removeChild(existing_background)
          let diarioDeBordo = document.querySelector(".diarioDeBordo");
          let diarioDeBordo_brilho = document.querySelector(".diarioDeBordo_brilho");
          if(diarioDeBordo && diarioDeBordo_brilho){
            diarioDeBordo.style.zIndex = "10"
            diarioDeBordo_brilho.style.zIndex = "9"
          }

        }
    }
  }
}

//FUNÇÕES GLOBAIS - FIM//




//FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DA DIV "calculoBussola" - INÍCIO //
document.addEventListener("DOMContentLoaded", () => {

  //CAPTURA DOS ELEMENTOS NO HTML
  const balao = document.querySelector(".balao");
  const mapa = document.querySelector(".mapa");
  const localizacao = document.getElementById("local");

  //DEFINE A LOCALIZAÇÃO DO BALÃO NA TELA E NO MAPA
  let [balaoX, balaoY, mapaX, mapaY] = [60, 31, -20, -20];

  //INCREMENTO DE "PX" A INCREMENTAR PARA GERAR O MOVIMENTO
  const vwIncrement = 0.05; //ORIGINAL 0.05

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
    if (keyState["ArrowUp"]) {
      [balaoY, mapaY] = [balaoY - vwIncrement, mapaY + vwIncrement * 5];
      balao.src = "./assets/balao/balao_costa.gif"
    }
    if (keyState["ArrowDown"]) {
      [balaoY, mapaY] = [balaoY + vwIncrement, mapaY - vwIncrement * 5];
      balao.src = "./assets/balao/balao_frente.gif"
    }
    if (keyState["ArrowLeft"]) {
      [balaoX, mapaX] = [balaoX - vwIncrement, mapaX + vwIncrement * 5];
      balao.src = "./assets/balao/balao_esquerdo.gif"
    }
    if (keyState["ArrowRight"]) {
      [balaoX, mapaX] = [balaoX + vwIncrement, mapaX - vwIncrement * 5];
      balao.src = "./assets/balao/balao_direito.gif"
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
    let existing_bussola = document.querySelector(".bussola_fundo");
    let existing_bussola_ponteiro = document.querySelector(".bussola_ponteiro");
    let existing_bussola_circulo = document.querySelector(".bussola_circulo");
    if (existing_bussola) {
      container.removeChild(existing_bussola);
      container.removeChild(existing_bussola_ponteiro);
      container.removeChild(existing_bussola_circulo);
    }
  });


  //DIARIO FUNCIONALIDADES DE CLIQUE
  diarioDeBordo.addEventListener("click", () => {
    diarioDeBordo_clicked = toggleBrilho(
      diarioDeBordo_clicked,
      diarioDeBordo_brilho,
      "./assets/04_diario_de_bordo/diario_de_bordo_contorno.png"
    );
    set_black_background("diario");
    let existing_bussola = document.querySelector(".bussola_fundo");
    let existing_bussola_ponteiro = document.querySelector(".bussola_ponteiro");
    let existing_bussola_circulo = document.querySelector(".bussola_circulo");
    if (existing_bussola) {
      container.removeChild(existing_bussola);
      container.removeChild(existing_bussola_ponteiro);
      container.removeChild(existing_bussola_circulo);
    }
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
      localX: 790,
      localY: 265,
      brilhoX: 789,
      brilhoY: 264,
      width: "75px",
      brilhoWidth: "77px",
      scale: "scale(1)"
    },
    {
      name: "torrePisa",
      src: "./assets/botoes_lugares/torre_pisa/torre_pisa.png",
      srcBrilho: "./assets/botoes_lugares/torre_pisa/torre_pisa_contorno.png",
      localX: 780.47,
      localY: 136.9,
      brilhoX: 779,
      brilhoY: 135,
      width: "19px",
      brilhoWidth: "21.5px",
      scale: "scale(1)"
    },
    {
      name: "torreEiffel",
      src: "./assets/botoes_lugares/torre_eiffel/torre_eiffel.png",
      srcBrilho: "./assets/botoes_lugares/torre_eiffel/torre_eiffel_contorno.png",
      localX: 724,
      localY: 88,
      brilhoX: 723,
      brilhoY: 86,
      width: "41px",
      brilhoWidth: "43px",
      scale: "scale(1)"
    },
    {
      name: "bigBen",
      src: "./assets/botoes_lugares/big_ben/big_ben.png",
      srcBrilho: "./assets/botoes_lugares/big_ben/big_ben_contorno.png",
      localX: 684,
      localY: 58,
      brilhoX: 683,
      brilhoY: 56,
      width: "30px",
      brilhoWidth: "32px",
      scale: "scale(1)"
    },
    {
      name: "estatuaLiberdade",
      src: "./assets/botoes_lugares/estatua_liberdade/estatua_liberdade.png",
      srcBrilho: "./assets/botoes_lugares/estatua_liberdade/estatua_liberdade_contorno.png",
      localX: 460,
      localY: 115,
      brilhoX: 458.5,
      brilhoY: 114,
      width: "25px",
      brilhoWidth: "27.5px",
      scale: "scale(1)"
    },
    {
      name: "piramideTeotihuacan",
      src: "./assets/botoes_lugares/piramide_de_teotihuacan/piramide_teotihuacan.png",
      srcBrilho: "./assets/botoes_lugares/piramide_de_teotihuacan/piramide_teotihuacan_contorno.png",
      localX: 382,
      localY: 249,
      brilhoX: 390,
      brilhoY: 252,
      width: "84px",
      brilhoWidth: "70px",
      scale: "scale(1.27)"
    },
    {
      name: "machu_picchu",
      src: "./assets/botoes_lugares/machu_picchu/machu_pichu.png",
      srcBrilho: "./assets/botoes_lugares/machu_picchu/machu_pichu_contorno.png",
      localX: 488.9,
      localY: 376.2,
      brilhoX: 487.9,
      brilhoY: 375.2,
      width: "87px",
      brilhoWidth: "90px",
      scale: "scale(1)"
    },
    {
      name: "taj_mahal",
      src: "./assets/botoes_lugares/taj_mahal/taj_mahal.png",
      srcBrilho: "./assets/botoes_lugares/taj_mahal/taj_mahal_contorno.png",
      localX: 1003,
      localY: 204,
      brilhoX: 1002,
      brilhoY: 203,
      width: "86px",
      brilhoWidth: "88px",
      scale: "scale(1)"
    },
    {
      name: "opera_sydney",
      src: "./assets/botoes_lugares/opera_sydney/opera_de_sydney.png",
      srcBrilho: "./assets/botoes_lugares/opera_sydney/opera_de_sydney_contorno.png",
      localX: 1222,
      localY: 462,
      brilhoX: 1221,
      brilhoY: 461,
      width: "86px",
      brilhoWidth: "89px",
      scale: "scale(1)"
    },
    {
      name: "monte_fuji",
      src: "./assets/botoes_lugares/monte_fuji/monte_fuji.png",
      srcBrilho: "./assets/botoes_lugares/monte_fuji/monte_fuji_contorno.png",
      localX: 1254,
      localY: 242,
      brilhoX: 1252,
      brilhoY: 241,
      width: "60px",
      brilhoWidth: "63px",
      scale: "scale(1)"
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
      botao.style.left = `${button.localX}px`
      botao.style.top = `${button.localY}px`
      botao.style.zIndex = `3`

      contorno.style.width = button.brilhoWidth
      contorno.style.transform = button.scale
      contorno.style.position = `absolute`
      contorno.style.left = `${button.brilhoX}px`
      contorno.style.top = `${button.brilhoY}px` 
      contorno.style.zIndex = `2`

      botao.addEventListener("mouseenter", () => {
        botao.style.cursor = "pointer";
        const contorno_existente = document.querySelector(`.${button.name}Contorno`)
        if (!contorno_existente){
          mapa.appendChild(contorno)
        }
      });

      botao.addEventListener("mouseleave", function() {
        //const contorno_existente = document.querySelector(`.${button.name}Contorno`)
        //mapa.removeChild(contorno_existente)
      });



      mapa.appendChild(botao);
    })
  }

  render_buttons();

});
//FUNÇÕES QUE INSEREM OS BOTÕES PELO MAPA - FIM//



//FUNÇÕES QUE DESCOBREM OS MONUMENTOS - INICIO//
document.addEventListener("DOMContentLoaded", function () {

  let monumentos = [
    {
      name: "opera_sydney",
      element: document.querySelector(".opera_sydney"),
      cards: ["./assets/cards_monumentos_historicos/08_opera_de_sydney/08_opera_de_sydney_01.png", "./assets/cards_monumentos_historicos/08_opera_de_sydney/08_opera_de_sydney_02.png" ],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/08_folha_opera_sydney_sombra.png",
      dicaOn: "./assets/02_folhas_com_figuras/08_folha_opera_sydney.png"
    },
    {
      name: "monte_fuji",
      element: document.querySelector(".monte_fuji"),
      cards: ["./assets/cards_monumentos_historicos/05_monte_fuji/05_monte_fuji_01.png", "./assets/cards_monumentos_historicos/05_monte_fuji/05_monte_fuji_02.png"],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/05_folha_monte_fuji.png",
      dicaOn: "./assets/02_folhas_com_figuras/05_folha_monte_fuji.png"
    },
    {
      name: "taj_mahal",
      element: document.querySelector(".taj_mahal"),
      cards: ["./assets/cards_monumentos_historicos/06_taj_mahal/06_taj_mahal_01.png", "./assets/cards_monumentos_historicos/06_taj_mahal/06_taj_mahal_02.png" ],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/06_folha_taj_mahal.png",
      dicaOn: "./assets/02_folhas_com_figuras/06_folha_taj_mahal.png"
    },
    {
      name: "bigBen",
      element: document.querySelector(".bigBen"),
      cards: ["./assets/cards_monumentos_historicos/04_big_ben/04_big_ben_01.png","./assets/cards_monumentos_historicos/04_big_ben/04_big_ben_02.png"],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/04_folha_big_ben.png",
      dicaOn: "./assets/02_folhas_com_figuras/04_folha_big_ben.png"
    },
    {
      name: "torreEiffel",
      element: document.querySelector(".torreEiffel"),
      cards: ["./assets/cards_monumentos_historicos/03_torre_eiffel/03_torre_eiffel_01.png", "./assets/cards_monumentos_historicos/03_torre_eiffel/03_torre_eiffel_02.png" ],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/03_folha_torre_eiffel.png",
      dicaOn: "./assets/02_folhas_com_figuras/03_folha_torre_eiffel.png"
    },
    {
      name: "torrePisa",
      element: document.querySelector(".torrePisa"),
      cards: ["./assets/cards_monumentos_historicos/02_torre_pisa/02_torre_pisa_01.png", "./assets/cards_monumentos_historicos/02_torre_pisa/02_torre_pisa_02.png" ],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/02_folha_torre_pisa.png",
      dicaOn: "./assets/02_folhas_com_figuras/02_folha_torre_pisa.png"
    },
    {
      name: "piramidesGize",
      element: document.querySelector(".piramidesGize"),
      cards: ["./assets/cards_monumentos_historicos/07_piramides/07_piramides_gize_01.png", "./assets/cards_monumentos_historicos/07_piramides/07_piramides_gize_02.png" ],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/07_folha_piramide_gize.png",
      dicaOn: "./assets/02_folhas_com_figuras/07_folha_piramide_gize.png"
    },
    {
      name: "piramideTeotihuacan",
      element: document.querySelector(".piramideTeotihuacan"),
      cards: ["./assets/cards_monumentos_historicos/09_piramide_de_teotihuacan/09_piramide_de_teotihuacan_01.png", "./assets/cards_monumentos_historicos/09_piramide_de_teotihuacan/09_piramide_de_teotihuacan_02.png" ],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/09_folha_piramide.png",
      dicaOn: "./assets/02_folhas_com_figuras/09_folha_piramide.png"
    },
    {
      name: "machu_picchu",
      element: document.querySelector(".machu_picchu"),
      cards: ["./assets/cards_monumentos_historicos/10_machu_picchu/10_machu_picchu_01.png", "./assets/cards_monumentos_historicos/10_machu_picchu/10_machu_picchu_02.png" ],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/10_folha_machu_picchu.png",
      dicaOn: "./assets/02_folhas_com_figuras/10_folha_machu_picchu.png"
    },
    {
      name: "estatuaLiberdade",
      element: document.querySelector(".estatuaLiberdade"),
      cards: ["./assets/cards_monumentos_historicos/01_estatua_liberdade/01_estatua_liberdade.png"],
      descoberto: false,
      dicaOff: "./assets/01_folhas_sem_figuras/01_folha_estatua_liberdade.png",
      dicaOn: "./assets/02_folhas_com_figuras/01_folha_estatua_liberdade.png"
    }
  ]

  const set_monumento_cards = (monumento) => {
    const black_background = document.querySelector(".black_background");

    let monument

    if (monumento.cards.length > 1) {

      const monumento_card = document.createElement("img");
      monumento_card.classList.add("monumento_card");
      monumento_card.src = monumento.cards[0];

      monument = monumento_card

      const create_next_button = () => {
        const button_next = document.createElement("img");
        button_next.classList.add("button_next");
        button_next.src = "./assets/botoes_lugares/botao_continuar_azul.png";
        button_next.addEventListener("click", () => {
          monumento_card.src = monumento.cards[1];
          container.removeChild(button_next)
          const button_back = document.createElement("img");
          button_back.classList.add("button_back");
          button_back.src = "./assets/botoes_lugares/botao_voltar_azul.png";
          container.appendChild(button_back);
          button_back.addEventListener("click", () => {
            monument.src = monumento.cards[0];
            container.removeChild(button_back);
            create_next_button();
          })
        })
        container.appendChild(button_next);
      }

      create_next_button();
      

      const button_close = document.createElement("img");
      button_close.classList.add("button_close");
      button_close.src = "./assets/botoes_lugares/botao_fechar_azul.png"
      button_close.addEventListener("click", () => {
        const existing_card = document.querySelector(".monumento_card");
        const existing_button_next = document.querySelector(".button_next");
        if(existing_button_next) { container.removeChild(existing_button_next)};
        const existing_button_back = document.querySelector(".button_back");
        if(existing_button_back) { container.removeChild(existing_button_back)};
        container.removeChild(button_close);
        container.removeChild(existing_card);
        set_black_background();
      })
      container.appendChild(button_close);



    } else {

      const monumento_card = document.createElement("img");
      monumento_card.classList.add("monumento_card");
      monumento_card.src = monumento.cards[0];
      monument = monumento_card

      const button_close = document.createElement("img");
      button_close.classList.add("button_close");
      button_close.src = "./assets/botoes_lugares/botao_fechar_azul.png"
      button_close.addEventListener("click", () => {
        const existing_card = document.querySelector(".monumento_card");
        container.removeChild(button_close);
        container.removeChild(existing_card);
        set_black_background();
      })
      container.appendChild(button_close);
    }
    container.appendChild(monument);
  }



  monumentos.forEach((monumento) => {

    monumento.element.addEventListener("click", () => {
      console.log(monumento.descoberto)
      set_black_background();
      set_monumento_cards(monumento);
      monumento.descoberto = true;
    })
  });

  //CAPTURA OS BOTÕES - FIM//


});
//FUNÇÕES QUE DESCOBREM OS MONUMENTOS - FIM//
