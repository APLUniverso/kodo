const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = "01";
const fontSize = 16;
const columnas = canvas.width / fontSize;

const lluvia = Array.from({ length: columnas }).fill(1);

function dibujar() {
    ctx.fillStyle = "rgba(0, 6, 26, 0.05)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#1B1A55";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < lluvia.length; i++) {
        const texto = letras.charAt(Math.floor(Math.random() * letras.length));
        ctx.fillText(texto, i * fontSize, lluvia[i] * fontSize);

        if (lluvia[i] * fontSize > canvas.height && Math.random() > 0.975) {
            lluvia[i] = 0;
        }

    lluvia[i]++;
    }
}

setInterval(dibujar, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
