const body = document.querySelector("body")
const button_next = document.querySelector(".botao_continuar")
const button_previous = document.querySelector(".botao_voltar")

let baloon_number_talk = 1

const previous_baloon_talk = () => {
    if (baloon_number_talk <= 1) {
        return
    }

    if (baloon_number_talk >= 2) {
        baloon_number_talk -= 1
    }
}

const next_baloon_talk = () => {
    if (baloon_number_talk >= 4) {
        return
    }

    if (baloon_number_talk < 4) {
        baloon_number_talk += 1
    }
}

const baloon_talk = document.createElement("img")

baloon_talk.src = "./assets/baloes_fala/balao_fala_01.png"

baloon_talk.classList.add("balao_fala")

body.appendChild(baloon_talk)

const change_baloon_talk = () => {

    if (baloon_number_talk === 1) {
        baloon_talk.src = "./assets/baloes_fala/balao_fala_01.png"
    }
    if (baloon_number_talk === 2) {
        baloon_talk.src = "./assets/baloes_fala/balao_fala_02.png"
    }
    if (baloon_number_talk === 3) {
        baloon_talk.src = "./assets/baloes_fala/balao_fala_03.png"
    }
    if (baloon_number_talk === 4) {
        baloon_talk.src = "./assets/baloes_fala/balao_fala_04.png"
    }

}

button_next.addEventListener("click", () => {
    next_baloon_talk()
    change_baloon_talk()
})

button_previous.addEventListener("click", () => {
    previous_baloon_talk()
    change_baloon_talk()
})