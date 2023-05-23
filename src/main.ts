//se puede declara con una minuscuala  o mayuscula
interface IVehiculo {
  readonly modelo: string;
  readonly fabricante: string;
  enceder(): void;
  detener(): void;
  acelerar(): void;
}
interface IVehiculoTerrestre extends IVehiculo {
  numerollantas: number;
  conducir(): void;
}
interface IVehiculoMaritimo extends IVehiculo {
  numeroAnclas: number;
  navegar(): void;
}
interface IVehiculoAereo extends IVehiculo {
  numeroTurbinas: number;
  volar(): void;
}
class Camioneta implements IVehiculoTerrestre {
  modelo: string = "4X2";
  fabricante: string = "Casa Vaca";
  numerollantas: number=5;
  placa!: string;
  conducir(): void {
    console.log("El Vehículo esta siento conducido");
  }

  enceder(): void {
    console.log("El Vehículo se ha encedito");
  }
  detener(): void {
    console.log("El Vehículo se ha detenito");
  }
  acelerar(): void {
    console.log("El Vehículo ha acelerando");
  }

}
function procesar(vehiculo:IVehiculoTerrestre) {
vehiculo.enceder();
vehiculo.detener();
}

class Barco implements IVehiculoMaritimo {
  modelo: string = "Cargero";
  fabricante: string = "Aktras";
  numeroAnclas:  number=5;
  bandera: string="Francesa";

  navegar(): void {
    console.log("El barco esta siento navegado");
  }

  enceder(): void {
    console.log("El barco se ha encedito");
  }
  detener(): void {
    console.log("El barco se ha detenito");
  }
  acelerar(): void {
    console.log("El barco se ha acelerando");
  }

}
function barca(vehiculo:IVehiculoMaritimo) {
vehiculo.enceder();
vehiculo.detener();
}


//procesar(new Camioneta);
//intaciar un vehiculo terestre
let vehiculoMaritimo= new Barco();
console.log("el modelo del barco es "+vehiculoMaritimo.modelo);
console.log("Su fabircante es "+vehiculoMaritimo.fabricante);
console.log("Su numeo de anclas es "+vehiculoMaritimo.numeroAnclas);
console.log("Su bandera es "+vehiculoMaritimo.bandera);
console.log(vehiculoMaritimo.navegar(),vehiculoMaritimo.enceder(), vehiculoMaritimo.detener(), vehiculoMaritimo.acelerar());

//instanciar un vehiculo maritimo
let vehiculoTerestre= new Camioneta();
console.log("el numero de llantas es "+vehiculoTerestre.numerollantas);
console.log("Su modelo es "+vehiculoTerestre.modelo);
console.log("Su fabircante es "+vehiculoTerestre.fabricante);
console.log(vehiculoTerestre.conducir(),vehiculoTerestre.enceder(), vehiculoTerestre.detener(), vehiculoTerestre.acelerar());

