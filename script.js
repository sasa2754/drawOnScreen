const canvas = document.getElementById('canvas');
const escrito = document.getElementById('escrito');
const aumenta = document.getElementById('aumenta');
const diminui = document.getElementById('diminui');

const ctx = canvas.getContext('2d');

let min = 0;
let max = 255;

let r = Math.floor(Math.random() * (max - min) + min);
let g = Math.floor(Math.random() * (max - min) + min);
let b = Math.floor(Math.random() * (max - min) + min);

let nsei = 0;
let nsei2 = 0;
let nsei3 = 0;

let tamanho = 10;

// document.body.addEventListener('keydown')
// Adiciona o evento de movimento do mouse ao body
document.body.addEventListener('mousemove', (event) => {
    // Obtém a posição do mouse relativa ao canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if(nsei == 0){
        r += 5;
    }
    else{
        r -= 12;
    }
    if(nsei2 == 0){
        g += 10;
    }
    else{
        g -= 9;
    }
    if(nsei3 == 0){
        b += 15;
    }
    else{
        b -= 8;
    }

    if (r >= 255) {
        nsei = 1;
        r = 255;
    }
    if (g >= 255) {
        nsei2 = 1;
        g = 255;
    }
    if (b >= 255) {
        nsei3 = 1;
        b = 255;
    }
    if(r <= 0){
        nsei = 0;
        r = 0;
    }
    if (g <= 0) {
        nsei2 = 0;
        g = 0;
    }
    if (b <= 0) {
        nsei3 = 0;
        b = 0;
    }

    // Gera valores de cor RGB baseados na posição do mouse
    // Você pode ajustar os valores 255 e 360 para obter diferentes resultados
    // const r = Math.floor((x / canvas.width) * 255);
    // const g = Math.floor((y / canvas.height) * 255);
    // const b = Math.floor(((x + y) / (canvas.width + canvas.height)) * 255);
    // Define a cor do retângulo usando a cor RGB calculada
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(x - (tamanho/2), y - (tamanho/2), tamanho, tamanho);

    // Atualiza o texto do header com as coordenadas do mouse
    escrito.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

function aumentar() {
    tamanho += 10;

    if (tamanho >= 250) {
        tamanho = 250;
    }
}

function diminuir() {
    tamanho -= 10;
    if (tamanho <= 0) {
        tamanho = 2;
    }
}
