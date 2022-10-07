//Consigna: Realizar 3 clases “padres” distintas, y aplicar herencia en cada una
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
var Animal = /** @class */ (function () {
    function Animal(nombre, velocidad) {
        this.nombre = nombre;
        this.velocidad = velocidad;
    }
    Animal.prototype.mostrarVelocidad = function () {
        console.log("".concat(this.nombre, " corre a una velocidad de ").concat(this.velocidad, "."));
    };
    return Animal;
}());
var animalesVeloces = /** @class */ (function (_super) {
    __extends(animalesVeloces, _super);
    function animalesVeloces(nombre, velocidad, peso) {
        var _this = _super.call(this, nombre, velocidad) || this;
        _this.peso = peso;
        return _this;
    }
    return animalesVeloces;
}(Animal));
var animal1 = new animalesVeloces('conejo blanco', 50, 5);
var animal2 = new animalesVeloces('chita', 100, 60);
var animal3 = new animalesVeloces("Halcon", 90, 45);
console.log(animal1.mostrarVelocidad());
console.log(animal2.mostrarVelocidad());
console.log(animal3.mostrarVelocidad());
