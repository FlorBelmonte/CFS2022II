class Operacion {
    protected valor1: number;
    protected valor2 : number;

public constructor(valor1: number, valor2: number){
    this.valor1 = valor1;
    this.valor2 = valor2;
}
}
class Suma extends Operacion {
    public constructor(valor1: number, valor2: number){
        super(valor1, valor2)
    }
    public calcularSuma(){
        return this.valor1 + this.valor2
    }
    
}
class Resta extends Operacion{
    public constructor (valor1: number, valor2: number){
        super(valor1, valor2)
    }
    public calcularResta(){
        return this.valor1 - this.valor2
    }
}

let sumaNumeros : Suma = new Suma(10, 16)
let restaNumeros : Resta = new Resta (23, 20)

console.log(sumaNumeros.calcularSuma())
console.log(restaNumeros.calcularResta())
