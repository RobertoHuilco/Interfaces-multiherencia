"use strict";
class Camioneta {
    constructor() {
        this.modelo = "4X2";
        this.fabricante = "Casa Vaca";
        this.numerollantas = 5;
    }
    conducir() {
        console.log("El Vehículo esta siento conducido");
    }
    enceder() {
        console.log("El Vehículo se ha encedito");
    }
    detener() {
        console.log("El Vehículo se ha detenito");
    }
    acelerar() {
        console.log("El Vehículo ha acelerando");
    }
}
function procesar(vehiculo) {
    vehiculo.enceder();
    vehiculo.detener();
}
class Barco {
    constructor() {
        this.modelo = "Cargero";
        this.fabricante = "Aktras";
        this.numeroAnclas = 5;
        this.bandera = "Francesa";
    }
    navegar() {
        console.log("El barco esta siento navegado");
    }
    enceder() {
        console.log("El barco se ha encedito");
    }
    detener() {
        console.log("El barco se ha detenito");
    }
    acelerar() {
        console.log("El barco se ha acelerando");
    }
}
function barca(vehiculo) {
    vehiculo.enceder();
    vehiculo.detener();
}
//procesar(new Camioneta);
//intaciar un vehiculo terestre
let vehiculoMaritimo = new Barco();
console.log("el modelo del barco es " + vehiculoMaritimo.modelo);
console.log("Su fabircante es " + vehiculoMaritimo.fabricante);
console.log("Su numeo de anclas es " + vehiculoMaritimo.numeroAnclas);
console.log("Su bandera es " + vehiculoMaritimo.bandera);
console.log(vehiculoMaritimo.navegar(), vehiculoMaritimo.enceder(), vehiculoMaritimo.detener(), vehiculoMaritimo.acelerar());
//instanciar un vehiculo maritimo
let vehiculoTerestre = new Camioneta();
console.log("el numero de llantas es " + vehiculoTerestre.numerollantas);
console.log("Su modelo es " + vehiculoTerestre.modelo);
console.log("Su fabircante es " + vehiculoTerestre.fabricante);
console.log(vehiculoTerestre.conducir(), vehiculoTerestre.enceder(), vehiculoTerestre.detener(), vehiculoTerestre.acelerar());
