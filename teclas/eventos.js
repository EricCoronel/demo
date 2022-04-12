var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var colores = { ROJO: "Rojo", AZUL: "Azul", NEGRO: "Negro"};

var botonA = document.getElementById("botA");
var botonR = document.getElementById("botR");
var botonN = document.getElementById("botN");
botonA.addEventListener("click", cambiarColor);
botonR.addEventListener("click", cambiarColor);
botonN.addEventListener("click", cambiarColor);
function cambiarColor(evento){
    switch(evento.target.value){
        case colores.AZUL:
            color = "blue";
        break;
        case colores.ROJO:
            color = "red";
        break;
        case colores.NEGRO:
            color = "black";
        break;
    }
    
}

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var color = "red";

dibujarLinea("black", 1, 1, 1, 299, papel);
dibujarLinea("black", 1, 299, 299, 299, papel);
dibujarLinea("black", 299, 299, 299, 1, papel);
dibujarLinea("black", 299, 1, 1, 1, papel);

function dibujarTeclado(evento){
    var mov = 5;
    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(color, x, y, x, y - mov, papel);
            y = y - mov;
        break;
        case teclas.DOWN:
            dibujarLinea(color, x, y, x, y + mov, papel);
            y = y + mov;
        break;
        case teclas.RIGHT:
            dibujarLinea(color, x, y, x + mov, y, papel);
            x = x + mov;
        break;
        case teclas.LEFT:
            dibujarLinea(color, x, y, x - mov, y, papel);
            x = x - mov;
        break;
        default:
            console.log("otra tecla");
    }
};

function dibujarLinea(c, xi, yi, xf, yf, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = c;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
};

