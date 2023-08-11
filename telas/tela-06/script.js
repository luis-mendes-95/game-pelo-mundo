const container = document.querySelector('.container');
let x = 0;
let y = 0;
const step = 2.5; //2.5 é o padrão
let zoom = 800; //800 é o padrão
const keys = {};

window.onload = function() {
  x = -container.offsetWidth * (zoom / 100 - 1) / 2;
  y = -container.offsetHeight * (zoom / 100 - 1) / 2;
  container.style.backgroundSize = `${zoom}%`;
  container.style.backgroundPosition = `${x}px ${y}px`;
};

document.addEventListener('keydown', function(event) {
  keys[event.key] = true;
});

document.addEventListener('keyup', function(event) {
  keys[event.key] = false;
});

setInterval(function() {
  if (keys['ArrowLeft']) {
    x = Math.min(x + step, 0);
  }
  if (keys['ArrowRight']) {
    x = Math.max(x - step, -container.offsetWidth * (zoom / 100 - 1));
  }
  if (keys['ArrowUp']) {
    y = Math.min(y + step, 0);
  }
  if (keys['ArrowDown']) {
    y = Math.max(y - step, -container.offsetHeight * (zoom / 100 - 1));
  }
  if (keys['+']) {
    zoom += 10;
    x = Math.max(x, -container.offsetWidth * (zoom / 100 - 1));
    y = Math.max(y, -container.offsetHeight * (zoom / 100 - 1));
    keys['+'] = false;
  }
  if (keys['-']) {
    zoom -= 10;
    x = Math.min(x, 0);
    y = Math.min(y, 0);
    keys['-'] = false;
  }
  
   container.style.backgroundPosition = `${x}px ${y}px`;
},10);

