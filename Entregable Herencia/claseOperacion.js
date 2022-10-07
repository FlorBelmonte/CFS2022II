class Operacion {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
}
class Suma extends Operacion {
    constructor(valor1, valor2) {
        super(valor1, valor2);
    }
    calcularSuma() {
        return this.valor1 + this.valor2;
    }
}
class Resta extends Operacion {
    constructor(valor1, valor2) {
        super(valor1, valor2);
    }
    calcularResta() {
        return this.valor1 - this.valor2;
    }
}
let sumaNumeros = new Suma(10, 16);
let restaNumeros = new Resta(23, 20);
console.log(sumaNumeros);
console.log(restaNumeros);
