var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var colecion = [];

colecion.push(new Pakiman("Cauchin", 100, 30));
colecion.push(new Pakiman("Pokacho", 80, 50));
colecion.push(new Pakiman("Tocinauro", 120, 40));

for(paki of colecion){
    paki.mostrar();
}