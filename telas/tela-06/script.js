document.addEventListener("DOMContentLoaded", function() {

    //FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DO MAPA MUNDI - INICIO //
    const balao = document.querySelector(".balao");
    const container = document.querySelector(".container");
    let balaoX = 1;
    let balaoY = 1;
    const pixelIncrement = container.clientWidth / 1000;
    function updateBalaoPosition() {
        balao.style.left = balaoX + "vw";
        balao.style.top = balaoY + "vw";
    }
    const keyState = {};
    document.addEventListener("keydown", (e) => {
        keyState[e.key] = true;
    });
    document.addEventListener("keyup", (e) => {
        keyState[e.key] = false;
    });
    function moveBalao() {
        if (keyState["ArrowUp"]) {
                balaoY -= pixelIncrement;
        }
        if (keyState["ArrowDown"]) {
                balaoY += pixelIncrement;
        }
        if (keyState["ArrowLeft"]) {
                balaoX -= pixelIncrement;
        }
        if (keyState["ArrowRight"]) {
                balaoX += pixelIncrement;
        }

        updateBalaoPosition();
        requestAnimationFrame(moveBalao);
    }
    moveBalao();
    //FUNÇÕES QUE MOVIMENTAM O BALÃO DENTRO DO MAPA MUNDI - FIM //

});
