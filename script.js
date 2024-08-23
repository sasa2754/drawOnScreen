const canvas = document.getElementById('canvas');
const escrito = document.getElementById('escrito');
const aumentaX = document.getElementById('aumentaX');
const diminuiX = document.getElementById('diminuiX');
const aumentaY = document.getElementById('aumentaY');
const diminuiY = document.getElementById('diminuiY');
const barrinha = document.getElementById('tamanho');

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

let cor;

function ativar() {
    desenho = true;
}

function desativar() {
    desenho = false;
}

function borracha() {
    apagar = true;
}

function pincel() {
    apagar = false;
}





// document.body.addEventListener('keydown')
// Adiciona o evento de movimento do mouse ao body
document.body.addEventListener('mousemove', (event) => {
    // Obtém a posição do mouse relativa ao canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    cor = `rgb(${r}, ${g}, ${b})`;
    
    console.log(barrinha.value);
    if(desenho == true){
    
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
    
        // Define a cor do retângulo usando a cor RGB calculada
        if (apagar == false) {
            caneta.fillStyle = cor;
            // caneta.strokeStyle = cor;
        }
        else {
            caneta.fillStyle = `black`;
            // caneta.strokeStyle = `white`;
        }

        caneta.fillRect(x - (tamanho/2), y - (tamanho/2), tamanho, tamanho);
        // caneta.strokeRect(x - (tamanho/2), y - (tamanho/2), tamanho, tamanho);
    }
    
    // Atualiza o texto do header com as coordenadas do mouse
    escrito.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

function mudarTamanho(){
    tamanho = barrinha.value * 6;
}
