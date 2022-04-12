class Billete{
    constructor(v,c){
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
var entregado = [];

caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var dinero = 0;
var div = 0;
var papeles = 0;

var r = document.getElementById("resultado")
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero(){
    r.innerHTML = ""
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja){
        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad){
                papeles = bi.cantidad;
                bi.cantidad = 0;
            }
            else{
                papeles = div;
                bi.cantidad -= div
            }
            entregado.push(new Billete(bi.valor, papeles))
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0){
        r.innerHTML = "No tengo dinero suficiente";
        caja = entregado
    }
    else{
        for(var e of entregado){
            if(e.cantidad > 0){
                r.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
    entregado = []
}
