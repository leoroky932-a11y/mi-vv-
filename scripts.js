// Fechas de inicio y fin
const inicio = new Date("2025-03-21T00:00:00");
const fin = new Date("2026-02-14T00:00:00");

function actualizarContador() {
    const ahora = new Date();
    let diferencia;

    if (ahora < fin) {
        diferencia = ahora - inicio;
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        document.getElementById("contador").textContent =
        "Mi amor por ti comenzó hace... " + dias + " días " + horas + " horas " + minutos + " minutos " + segundos + " segundos ❤️";
    } else {
        escribirMensaje("¡Feliz día del amor mi llamita preciosa! ❤️");
        const musica = document.getElementById("musica");
        musica.play();
    }
}

setInterval(actualizarContador, 1000);

// Función para escribir texto poco a poco
function escribirMensaje(texto) {
    const contenedor = document.getElementById("contador");
    contenedor.textContent = "";
    let i = 0;
    const intervalo = setInterval(() => {
        contenedor.textContent += texto[i];
        i++;
        if (i >= texto.length) {
            clearInterval(intervalo);
        }
    }, 100);
}

// 🌳 Árbol de corazones en canvas
const canvas = document.getElementById("arbol");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

function dibujarCorazon(x, y, tamaño, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - tamaño/2, y - tamaño/2, x - tamaño/2, y + tamaño/3, x, y + tamaño);
    ctx.bezierCurveTo(x + tamaño/2, y + tamaño/3, x + tamaño/2, y - tamaño/2, x, y);
    ctx.fill();
}

function dibujarArbol() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tronco
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(190, 250, 20, 150);

    // Corazones como hojas
    for (let i = 0; i < 50; i++) {
        const x = 150 + Math.random() * 100;
        const y = 100 + Math.random() * 100;
        const tamaño = 8 + Math.random() * 10;
        const colores = ["#FF6464", "#FF99AC", "#FFB6C1"];
        const color = colores[Math.floor(Math.random() * colores.length)];
        dibujarCorazon(x, y, tamaño, color);
    }
}

setInterval(dibujarArbol, 1500);
dibujarArbol();

// 🎵 Truco para que la música empiece al primer clic
window.addEventListener("click", () => {
    const musica = document.getElementById("musica");
    if (musica) musica.play();
});
