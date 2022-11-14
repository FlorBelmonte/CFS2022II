interface Auto {
    arrancar(): void;
    acelerar(): void;
}

class AutoFamiliar implements Auto{
    marca: string;
    modelo: number;
    private velocidadActual: number; 

    public arrancar(): void {
        this.velocidadActual= 0;
        }
    public acelerar(): void {
        this.velocidadActual += 50;
    }

    public getVelocidadActual(): number {
    return this.velocidadActual;
    }
}
class AutoCarreras implements Auto{

    public arrancar(): void {
        console.log("el auto tiene tipo de encendido electrico..")
        }
    public acelerar(): void {
        console.log("el auto acelera de 0 a 100 en 5 segundos")
    }

}


