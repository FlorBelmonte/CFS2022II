var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operacion = /** @class */ (function () {
    function Operacion(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    return Operacion;
}());
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(valor1, valor2) {
        return _super.call(this, valor1, valor2) || this;
    }
    Suma.prototype.calcularSuma = function () {
        return this.valor1 + this.valor2;
    };
    return Suma;
}(Operacion));
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta(valor1, valor2) {
        return _super.call(this, valor1, valor2) || this;
    }
    Resta.prototype.calcularResta = function () {
        return this.valor1 - this.valor2;
    };
    return Resta;
}(Operacion));
var sumaNumeros = new Suma(10, 16);
var restaNumeros = new Resta(23, 20);
console.log(sumaNumeros.calcularSuma());
console.log(restaNumeros.calcularResta());
