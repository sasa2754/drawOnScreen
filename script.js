const canvas = document.getElementById('canvas');
const header = document.getElementById('header');
const ctx = canvas.getContext('2d');

// Adiciona o evento de movimento do mouse ao body
document.body.addEventListener('mousemove', (event) => {
    // Obtém a posição do mouse relativa ao canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Gera valores de cor RGB baseados na posição do mouse
    // Você pode ajustar os valores 255 e 360 para obter diferentes resultados
    // const r = Math.floor((x / canvas.width) * 255);
    // const g = Math.floor((y / canvas.height) * 255);
    // const b = Math.floor(((x + y) / (canvas.width + canvas.height)) * 255);
    const r = 30;
    const g = 126;
    const b = 12;
    // Define a cor do retângulo usando a cor RGB calculada
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(x - 10, y - 10, 20, 20);

    // Atualiza o texto do header com as coordenadas do mouse
    header.textContent = `X: ${x}, Y: ${y}`;
});
