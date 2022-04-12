document.addEventListener("mousedown", mousePresiona);
document.addEventListener("mousemove", mouseMueve);
document.addEventListener("mouseup", mouseSuelta);

var colores = { ROJO: "Rojo", AZUL: "Azul", NEGRO: "Negro", BLANCO: "Blanco"};

var botonA = document.getElementById("botA");
var botonR = document.getElementById("botR");
var botonN = document.getElementById("botN");
var goma = document.getElementById("goma");
botonA.addEventListener("click", cambiarColor);
botonR.addEventListener("click", cambiarColor);
botonN.addEventListener("click", cambiarColor);
goma.addEventListener("click", cambiarColor);
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
        case colores.BLANCO:
          color = "white";
        break;
    }
    
}

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x= 150; //Donde arranca la linea
var y = 150;
var presionado = false;
var color = "blue";

//dibujarLinea("red",149,149,151,151, papel);//Se dibuja el primer punto
dibujarLinea("black", 1, 1, 1, 299, papel);
dibujarLinea("black", 1, 299, 299, 299, papel);
dibujarLinea("black", 299, 299, 299, 1, papel);
dibujarLinea("black", 299, 1, 1, 1, papel);

function dibujarLinea( color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();//Arrancar el paso
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);//mover el lapiz donde arranca la linea
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();//Cerrar linea
  lienzo.closePath();//Quitar el lapiz
}

function mousePresiona(evento)
{
  presionado = true;
}

function mouseMueve(evento)
{
  var xMueve= evento.clientX -7;//Toma la coordenada del mouse X
  var yMueve = evento.clientY -82;// Toma la coordenada del mouse Y
  //console.log(xMueve, yMueve);//Prueba para imprimir en la consola las coordenadas
  if (presionado == true)//Solo si esta presionado el Click se va a dibujar
  {
    dibujarLinea(color, xi, yi, xMueve, yMueve, papel);
  }
  xi = xMueve;// Pasar valor actual de x a xinicial para tener continuidad
  yi = yMueve;// Pasar valor actual de y a y inicial para tener continuidad

}

function mouseSuelta(evento)
{
  presionado = false;
}