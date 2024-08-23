const canvas = document.getElementById('canvas');
const escrito = document.getElementById('escrito');
const barrinha = document.getElementById('tamanho');
const color = document.getElementById('color');


const caneta = canvas.getContext('2d');

let min = 0;
let max = 255;

let r = Math.floor(Math.random() * (max - min) + min);
let g = Math.floor(Math.random() * (max - min) + min);
let b = Math.floor(Math.random() * (max - min) + min);


let nsei = 0;
let nsei2 = 0;
let nsei3 = 0;

let tamanho = 10;

let desenho = false;

let apagar = false;

let isColorido = true;

let cor;



// Adiciona o evento de movimento do mouse ao body
document.body.addEventListener('mousemove', (event) => {
    // Obtém a posição do mouse relativa ao canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    if(isColorido == true){
        cor = `rgb(${r}, ${g}, ${b})`;
        colorido();
    }
    else {
        cor = color.value;
    }
    
    if(desenho == true){
        // Define a cor do retângulo
        if (apagar == false) {
            caneta.fillStyle = cor;
        }
        else {
            caneta.fillStyle = `black`;
        }

        // Desenha o quadrado
        caneta.fillRect(x - (tamanho/2), y - (tamanho/2), tamanho, tamanho);
    }
    
    // Atualiza o texto do header com as coordenadas do mouse
    escrito.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

// Muda o tamanho do pincel
function mudarTamanho(){
    tamanho = barrinha.value * 6;
}

// Faz o pincel só pintar quando clica
function ativar() {
    desenho = true;
}
function desativar() {
    desenho = false;
}

// Troca do colorido pra cor fixa e vice versa
function trocarCor(){
    isColorido = !isColorido;
}

// Liga a borracha
function borracha() {
    apagar = !apagar;
}

function colorido() {
    if(nsei == min){
        r += 5;
    }
    else{
        r -= 12;
    }
    if(nsei2 == min){
        g += 10;
    }
    else{
        g -= 9;
    }
    if(nsei3 == min){
        b += 15;
    }
    else{
        b -= 8;
    }
    
    if (r >= max) {
        nsei = 1;
        r = max;
    }
    if (g >= max) {
        nsei2 = 1;
        g = max;
    }
    if (b >= max) {
        nsei3 = 1;
        b = max;
    }
    if(r <= min){
        nsei = 0;
        r = min;
    }
    if (g <= min) {
        nsei2 = 0;
        g = min;
    }
    if (b <= min) {
        nsei3 = 0;
        b = min;
    }
}
