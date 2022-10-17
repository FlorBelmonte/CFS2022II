class Auto {
    private marca: string;
    private modelo: number;
    private color: string;

    public constructor (marca: string, modelo: number, color: string){
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
            
    }
}
class AutoCarrera extends Auto {
    private velocidad: number;
    public constructor (marca: string, modelo: number, color: string, velocidad: number){
        super(marca,modelo, color)
        this.velocidad = velocidad;
    }
    public getVelocidad(){
        return this.velocidad
    }
}
let autoDeCarrera1 : AutoCarrera = new AutoCarrera('Ferrari', 2018, 'Rojo', 325)
let autoDeCarrera2 : AutoCarrera = new AutoCarrera ('McLaren', 2019, 'Azul', 310)
console.log(autoDeCarrera1.getVelocidad())
console.log(autoDeCarrera2.getVelocidad())