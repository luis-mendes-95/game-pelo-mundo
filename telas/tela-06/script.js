//FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DA DIV "calculoBussola" - INÍCIO //
document.addEventListener("DOMContentLoaded", function() {
    const balao = document.querySelector(".balao");
    const mapa = document.querySelector(".mapa");
    const calculoBussola = document.querySelector(".calculoBussola");
    const container = document.querySelector(".container");
    let balaoX = 40;
    let balaoY = 25;
    let mapaX = 10;
    let mapaY = -30;
    const vwIncrement = 0.05; // Defina o incremento em unidades VW

    function updateBalaoPosition() {
        balao.style.left = balaoX + "vw";
        balao.style.top = balaoY + "vw";
        mapa.style.left = mapaX + "vw";
        mapa.style.top = mapaY + "vw";
        document.getElementById("balaoX").value = balaoX;
        document.getElementById("balaoY").value = balaoY;
    }

    const keyState = {};

    document.addEventListener("keydown", (e) => {
        keyState[e.key] = true;
    });

    document.addEventListener("keyup", (e) => {
        keyState[e.key] = false;
    });

    function moveBalao() {
        if (keyState["ArrowUp"] && balaoY >= 1) {
            balaoY -= vwIncrement;
            mapaY += vwIncrement * 5;
        }
        if (keyState["ArrowDown"] && balaoY <= 40) {
            balaoY += vwIncrement;
            mapaY -= vwIncrement * 5;
        }
        if (keyState["ArrowLeft"] && balaoX >= 1) {
            balaoX -= vwIncrement;
            mapaX += vwIncrement * 5;
        }
        if (keyState["ArrowRight"] && balaoX <= 90) {
            balaoX += vwIncrement;
            mapaX -= vwIncrement * 5;
        }

        updateBalaoPosition();
        requestAnimationFrame(moveBalao);
    }
    moveBalao();
});
//FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DA DIV "calculoBussola" - FIM //




//FUNÇÕES DE EFEITOS DE BOTÕES DA DASHBOARD - INICIO //
document.addEventListener("DOMContentLoaded", function() {

    const dashboard = document.querySelector(".dashboard")

    const luneta_brilho = document.createElement("img");
    luneta_brilho.classList.add("luneta_brilho")
    const luneta = dashboard.querySelector(".luneta");
    let luneta_clicked = false;
    luneta_brilho.src = ""

    const bussola = dashboard.querySelector(".bussola");
    let bussola_clicked = false;

    const dicas = dashboard.querySelector(".dicas");
    let dicas_clicked = false;

    const diarioDeBordo = dashboard.querySelector(".diarioDeBordo");
    let diarioDeBordo_clicked = false;

    luneta.addEventListener("click", () => {
        
        if (luneta_clicked === false) {
            luneta_clicked = true;
            luneta_brilho.src = "./assets/01_luneta/luneta_contorno.png"
            container.appendChild(luneta_brilho)
        } else if (luneta_clicked === true) {
            luneta_clicked = false;
            luneta_brilho.src = ""
            container.removeChild(luneta_brilho)
        }

    })


});
//FUNÇÕES DE EFEITOS DE BOTÕES DA DASHBOARD - FIM //

