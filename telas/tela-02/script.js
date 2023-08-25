const content = document.querySelector(".content");
const button_next = document.querySelector(".botao_continuar");
const button_previous = document.querySelector(".botao_voltar");

let baloon_number_talk = 1;

const previous_baloon_talk = () => {
  if (baloon_number_talk <= 1) {
    window.location.href = "/";
  }

  if (baloon_number_talk >= 2) {
    baloon_number_talk -= 1;
  }
};

const next_baloon_talk = () => {
  if (baloon_number_talk >= 4) {
    window.location.href = "../tela-03/";
  }

  if (baloon_number_talk < 4) {
    baloon_number_talk += 1;
  }
};

let baloon_talk = document.createElement("img");



baloon_talk.classList.add("balao_fala");

content.appendChild(baloon_talk);

const change_baloon_talk = () => {
  if (baloon_number_talk === 1) {
    baloon_talk.src = "./assets/baloes_fala/balao_fala_01.png";
  }
  if (baloon_number_talk === 2) {
    baloon_talk.src = "./assets/baloes_fala/balao_fala_02.png";
  }
  if (baloon_number_talk === 3) {
    baloon_talk.src = "./assets/baloes_fala/balao_fala_03.png";
  }
  if (baloon_number_talk === 4) {
    baloon_talk.src = "./assets/baloes_fala/balao_fala_04.png";
  }
};

button_next.addEventListener("click", () => {
  next_baloon_talk();
  change_baloon_talk();
});

button_previous.addEventListener("click", () => {
  previous_baloon_talk();
  change_baloon_talk();
});

const checkParams = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);

  if(params.size != 0){
    let baloon_param_talk = parseInt(params.get("param"))
    baloon_number_talk = baloon_param_talk
    baloon_talk.src = `./assets/baloes_fala/balao_fala_0${baloon_number_talk}.png`;
  } else {
    baloon_talk.src = "./assets/baloes_fala/balao_fala_01.png";
  }


}

checkParams()