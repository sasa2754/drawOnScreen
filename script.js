const canvas = document.getElementById('canvas');
const header = document.getElementById('header');
const ctx = canvas.getContext('2d');

// Adiciona o evento de movimento do mouse ao body
document.body.addEventListener('mousemove', (event) => {
    // Obtém a posição do mouse relativa ao canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Define a cor e desenha o retângulo no canvas
    ctx.fillStyle = 'black'; // Define a cor do retângulo
    ctx.fillRect(x - 10, y - 10, 20, 20);

    // Atualiza o texto do header com as coordenadas do mouse
    header.textContent = `X: ${x}, Y: ${y}`;
});
