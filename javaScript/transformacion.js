const form = document.getElementById("formNumero");
const numeroInput = document.getElementById("numero");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const pixelSize = 20;

// ejemplo inicial
let rows = 10;
let cols = 10;

canvas.width = cols * pixelSize;
canvas.height = rows * pixelSize;

ctx.imageSmoothingEnabled = false;

function drawPixel(x, y, color = "#00ff88") {
    ctx.fillStyle = color;
    ctx.fillRect(
        x * pixelSize,
        y * pixelSize,
        pixelSize,
        pixelSize
    );
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const valor = BigInt(numeroInput.value);

    const filas = Number(valor % 10n);
    const columnas = Number((valor % 100n) / 10n);
    const num = valor / 100n;

    const binario = num.toString(2);

    rows = filas || 5;
    cols = columnas || 5;

    canvas.width = cols * pixelSize;
    canvas.height = rows * pixelSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let i = 0;
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (i < binario.length && binario[i] === "1") {
                drawPixel(x, y);
            }
            i++;
        }
    }
});

