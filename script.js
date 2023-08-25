const botao_iniciar = document.querySelector(".botao_iniciar");
const botao_iniciar_brilho = document.querySelector(".botao_iniciar_brilho");

botao_iniciar.addEventListener("click", () => {
  window.location.href = "telas/tela-02/";
});

botao_iniciar.addEventListener("mouseenter", () => {
  botao_iniciar_brilho.style.display = "inline"
})

botao_iniciar.addEventListener("mouseout", () => {
  botao_iniciar_brilho.style.display = "none"
})