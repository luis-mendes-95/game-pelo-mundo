document.addEventListener("DOMContentLoaded", function() {

    //FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DA DIV "calculoBussola" - INÍCIO //
    const balao = document.querySelector(".balao");
    const calculoBussola = document.querySelector(".calculoBussola");
    const container = document.querySelector(".container");
    let balaoX = 40;
    let balaoY = 25;
    const vwIncrement = 0.05; // Defina o incremento em unidades VW

    function updateBalaoPosition() {
        balao.style.left = balaoX + "vw";
        balao.style.top = balaoY + "vw";
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
        }
        if (keyState["ArrowDown"] && balaoY <= 40) {
            balaoY += vwIncrement;
        }
        if (keyState["ArrowLeft"] && balaoX >= 1) {
            balaoX -= vwIncrement;
        }
        if (keyState["ArrowRight"] && balaoX <= 90) {
            balaoX += vwIncrement;
        }

        updateBalaoPosition();
        requestAnimationFrame(moveBalao);
    }

    moveBalao();
    //FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DA DIV "calculoBussola" - FIM //

});
