var ville = document.getElementById("villa");
var papel = ville.getContext("2d");

var cV= aleatorio(0,10);
var cC= aleatorio(0,10);
var cP= aleatorio(0,10);

var fondo = { url: "tile.png", cargaOk: false};
var vaca ={ url: "vaca.png", cargaOk: false};
var cerdo ={ url: "cerdo.png", cargaOk: false};
var pollo ={ url: "pollo.png", cargaOk: false};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca );

cerdo.imagen = new Image();
cerdo.imagen.src = "cerdo.png";
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = "pollo.png";
pollo.imagen.addEventListener("load", cargarPollo);


function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}
function cargarVaca(){
    vaca.cargaOk = true;
    dibujar();
}
function cargarCerdo(){
    cerdo.cargaOk = true;
    dibujar();
}
function cargarPollo(){
    pollo.cargaOk = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOk==true){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk==true){
        for(var v=0; v<cV; v++){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            x = x * 80
            y = y * 80
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOk==true){
        for(var v=0; v<cC; v++){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            x = x * 80
            y = y * 80
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOk==true){
        for(var v=0; v<cP; v++){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            x = x * 80
            y = y * 80
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio(min,max){
    var resultado;
    resultado = Math.floor(Math.random() * (max-min + 1)) + min;
    return resultado;
}