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
    const container = document.querySelector(".container")

    const luneta_brilho = document.createElement("img");
    luneta_brilho.classList.add("luneta_brilho");
    const luneta = dashboard.querySelector(".luneta");
    let luneta_clicked = false;
    luneta_brilho.src = ""

    const bussola_brilho = document.createElement("img");
    bussola_brilho.classList.add("bussola_brilho")
    const bussola = dashboard.querySelector(".bussolaDash");
    let bussola_clicked = false;
    bussola_brilho.src = ""

    const dicas_brilho = document.createElement("img");
    dicas_brilho.classList.add("dicas_brilho");
    const dicas = dashboard.querySelector(".dicas");
    let dicas_clicked = false;
    dicas_brilho.src = ""

    const diarioDeBordo_brilho = document.createElement("img");
    diarioDeBordo_brilho.classList.add("diarioDeBordo_brilho");
    const diarioDeBordo = dashboard.querySelector(".diarioDeBordo");
    let diarioDeBordo_clicked = false;
    diarioDeBordo_brilho.src = ""

    luneta.addEventListener("click", () => {
        
        if (luneta_clicked === false) {

            luneta_clicked = true;
            luneta_brilho.src = "./assets/01_luneta/luneta_contorno.png"
            container.appendChild(luneta_brilho)

            bussola_clicked = false;
            bussola_brilho.src = ""
            if (container.contains(bussola_brilho)){
                container.removeChild(bussola_brilho)
            }

            dicas_clicked = false;
            dicas_brilho.src = ""
            if(container.contains(dicas_brilho)){
                container.removeChild(dicas_brilho)
            }

            diarioDeBordo_clicked = false;
            diarioDeBordo_brilho.src = ""
            if(container.contains(diarioDeBordo_brilho)){
                container.removeChild(diarioDeBordo_brilho)
            }


        } else if (luneta_clicked === true) {

            luneta_clicked = false;
            luneta_brilho.src = ""
            container.removeChild(luneta_brilho)
            
        }

    })

    bussola.addEventListener("click", () => {
        
        if (bussola_clicked === false) {
            bussola_clicked = true;
            bussola_brilho.src = "./assets/02_bussola/bussola_contorno.png"
            container.appendChild(bussola_brilho)

            luneta_clicked = false;
            luneta_brilho.src = ""
            if(container.contains(luneta_brilho)){
                container.removeChild(luneta_brilho)
            }

            dicas_clicked = false;
            dicas_brilho.src = ""
            if(container.contains(dicas_brilho)){
                container.removeChild(dicas_brilho)
            }

            diarioDeBordo_clicked = false;
            diarioDeBordo_brilho.src = ""
            if(container.contains(diarioDeBordo_brilho)){
                container.removeChild(diarioDeBordo_brilho)
            }

            
        } else if (bussola_clicked === true) {
            bussola_clicked = false;
            bussola_brilho.src = ""
            container.removeChild(bussola_brilho)
        }

    })

    dicas.addEventListener("click", () => {
        
        if (dicas_clicked === false) {

            dicas_clicked = true;
            dicas_brilho.src = "./assets/03_dicas/dicas_contorno.png"
            container.appendChild(dicas_brilho)

            luneta_clicked = false;
            luneta_brilho.src = ""
            if(container.contains(luneta_brilho)){
                container.removeChild(luneta_brilho)
            }

            bussola_clicked = false;
            bussola_brilho.src = ""
            if (container.contains(bussola_brilho)){
                container.removeChild(bussola_brilho)
            }

            diarioDeBordo_clicked = false;
            diarioDeBordo_brilho.src = ""
            if(container.contains(diarioDeBordo_brilho)){
                container.removeChild(diarioDeBordo_brilho)
            }



        } else if (dicas_clicked === true) {
            dicas_clicked = false;
            dicas_brilho.src = ""
            if(container.contains(dicas_brilho)){
                container.removeChild(dicas_brilho)
            }


        }

    })

    diarioDeBordo.addEventListener("click", () => {
        
        if (diarioDeBordo_clicked === false) {

            diarioDeBordo_clicked = true;
            diarioDeBordo_brilho.src = "./assets/04_diario_de_bordo/diario_de_bordo_contorno.png"
            container.appendChild(diarioDeBordo_brilho)

            luneta_clicked = false;
            luneta_brilho.src = ""
            if(container.contains(luneta_brilho)){
                container.removeChild(luneta_brilho)
            }

            bussola_clicked = false;
            bussola_brilho.src = ""
            if (container.contains(bussola_brilho)){
                container.removeChild(bussola_brilho)
            }

            dicas_clicked = false;
            dicas_brilho.src = ""
            if(container.contains(dicas_brilho)){
                container.removeChild(dicas_brilho)
            }



        } else if (diarioDeBordo_clicked === true) {
            diarioDeBordo_clicked = false;
            diarioDeBordo_brilho.src = ""
            if(container.contains(diarioDeBordo_brilho)){
                container.removeChild(diarioDeBordo_brilho)
            }


        }

    })


});
//FUNÇÕES DE EFEITOS DE BOTÕES DA DASHBOARD - FIM //

