let indice = 0;

function mover(direccion) {
    const carrusel = document.getElementById("myJSCarrusel");
    const total = carrusel.children.length;

    indice = (indice + direccion + total) % total;
    carrusel.style.transform = `translateX(${-indice * 100}%)`;
}


fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("myNavbar").innerHTML = data;
    });
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("myFooter").innerHTML = data;
    });

// Movimiento automático cada 7 segundos
setInterval(() => mover(1), 7000);