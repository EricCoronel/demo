var texto = document.getElementById("text");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.clientWidth;
var lienzo = d.getContext("2d");

function dibujarLinea(c, xi, yi, xf, yf){
    lienzo.beginPath();
    lienzo.strokeStyle = c;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var l = 0
    var yini, xfin, xini, yfin;
    var col = "#aa77c3"

    for(l=0; l<lineas; l++){
        yini = 10 * l;
        xfin = 10 * (l + 1);
        dibujarLinea(col, 0, yini, xfin, 300)
    }

    for(l=0; l<lineas; l++){
        xini = 10 * l;
        yfin = 290 - (l * 10);
        dibujarLinea(col, xini, 300, 300, yfin)
    }

    for(l=0; l<lineas; l++){
        yini = 150 - (10 * l);
        xfin = 300 - (l * 10);
        dibujarLinea(col, 300, yini, xfin, 0)
    }

    for(l=0; l<lineas; l++){
        yini = 150 - (10 * l);
        xfin = l * 10;
        dibujarLinea(col, 0, yini, xfin, 0)
    }

    for(l=0; l<lineas; l++){
        yini = 75 - (10 * l);
        xfin = 150 - (l * 20);
        dibujarLinea(col, 150, yini, xfin, 0)
    }

    for(l=0; l<lineas; l++){
        yini = 75 - (10 * l);
        xfin = 150 + (l * 20);
        dibujarLinea(col, 150, yini, xfin, 0)
    }

    dibujarLinea(col,0,11,300,11)
    dibujarLinea(col,0,11,300,11)
    dibujarLinea(col,11,0,11,300)
    dibujarLinea(col,11,0,11,300)
    dibujarLinea(col,289,0,289,300)
    dibujarLinea(col,289,0,289,300)
    dibujarLinea("#AFA",1,1,1,299)
    dibujarLinea("#AFA",1,299,299,299)
    dibujarLinea("#AFA",299,299,299,1)
    dibujarLinea("#AFA",1,1,299,1)
}