abstract class Vehiculo{
    abstract marca: string;
    abstract modelo: number;

    abstract getMarca(): string;

    imprimirMarca(){
        console.log(`La marca del vehiculo es: ${this.getMarca}` )
    }
    abstract getModelo(): number;

    imprimirModelo(){
        console.log(`El modelo es: ${this.getModelo}`)
    }
}

class AutoCiudad extends Vehiculo{
    marca: string;
    modelo: number;
    cantidadPuertas: number;

    getMarca(): string {
       return "Renault"
    }
    getModelo(): number {
        return 2020
    }
    getCantidadPuertas(){
        return 4
    }
}
let autoUrbano= new AutoCiudad()
autoUrbano.imprimirMarca()
autoUrbano.imprimirModelo()


class AutoDeportivo extends Vehiculo{
    marca: string;
    modelo: number;
    private velMaxima: number;
getMarca(): string{
    return "Nissan"
}
getModelo(): number{
    return 2022
}
getVelMaxima(): number{
return 320
}
}
let deportivo: AutoDeportivo = new AutoDeportivo()
deportivo.imprimirMarca()
deportivo.imprimirModelo()

class Camioneta extends Vehiculo{
    marca: string;
    modelo: number;
    capPasajeros: number;
getMarca(){
    return "Toyota"
}
getModelo(): number {
    return 2021
}
getCapPasajeros(){
    return 5
}
}
let camioneta: Camioneta = new Camioneta()
console.log(camioneta.getCapPasajeros())
