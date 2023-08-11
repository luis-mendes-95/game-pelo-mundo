const setas_informacoes = document.querySelector(".setas_informacoes")
const botao_continuar = document.querySelector(".botao_continuar")
const botao_voltar = document.querySelector(".botao_voltar")

let informacao_num = 1

const mudar_seta_info = () => {
    if (informacao_num === 1) {
        setas_informacoes.src = "./assets/setas_informacoes/informacao_01.png"
        setas_informacoes.style.top = '20%'; 
        setas_informacoes.style.left = '20%'; 
    }
    if (informacao_num === 2) {
        setas_informacoes.src = "./assets/setas_informacoes/informacao_02.png"
        setas_informacoes.style.top = '30%'; 
        setas_informacoes.style.left = '40%'; 
    }
    if (informacao_num === 3) {
        setas_informacoes.src = "./assets/setas_informacoes/informacao_03.png"
        setas_informacoes.style.top = '40%'; 
        setas_informacoes.style.left = '28%'; 
    }
    if (informacao_num === 4) {
        setas_informacoes.src = "./assets/setas_informacoes/informacao_04.png"
        setas_informacoes.style.top = '48%'; 
        setas_informacoes.style.left = '39%'; 
    }
    if (informacao_num === 5) {
        setas_informacoes.src = "./assets/setas_informacoes/informacao_05.png"
        setas_informacoes.style.top = '42%'; 
        setas_informacoes.style.left = '52%'; 
    }
    if (informacao_num === 6) {
        setas_informacoes.src = "./assets/setas_informacoes/informacao_06.png"
        setas_informacoes.style.top = '52%'; 
        setas_informacoes.style.left = '67%'; 
    }
}

const add_info_seta_num = () => {
    if (informacao_num >= 6) {
        window.location.href = "../tela-06/"
    }

    if (informacao_num < 6) {
        informacao_num += 1
    }

    mudar_seta_info()
}

const sub_info_seta_num = () => {

    if (informacao_num <= 1) {
        window.location.href = "../tela-04/"
    }

    if (informacao_num > 1) {
        informacao_num -= 1
    }

    mudar_seta_info()

}

botao_continuar.addEventListener("click", () => {
    add_info_seta_num()
})

botao_voltar.addEventListener("click", () => {
    sub_info_seta_num()
})

mudar_seta_info()