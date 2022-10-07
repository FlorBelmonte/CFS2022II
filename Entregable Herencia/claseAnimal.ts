
//Consigna: Realizar 3 clases “padres” distintas, y aplicar herencia en cada una

class Animal {
    private nombre: string;
    private velocidad: number;

    public constructor (nombre: string, velocidad: number){
        this.nombre = nombre;
        this.velocidad = velocidad;
    }
public calcularVelocidad(){
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`)
}
}
class animalesVeloces extends Animal {

    private peso: number;
    public constructor(nombre: string, velocidad: number, peso: number){
        super(nombre, velocidad)
     this.peso = peso;  
    }
}
let animal1: animalesVeloces = new animalesVeloces('conejo blanco', 50, 5)
let animal2: animalesVeloces = new animalesVeloces('chita', 100, 60)

console.log(animal1.calcularVelocidad)
console.log(animal2.calcularVelocidad)
