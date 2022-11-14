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
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
    }
    Vehiculo.prototype.imprimirMarca = function () {
        console.log("La marca del vehiculo es: ".concat(this.getMarca));
    };
    Vehiculo.prototype.imprimirModelo = function () {
        console.log("El modelo es: ".concat(this.getModelo));
    };
    return Vehiculo;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudad.prototype.getMarca = function () {
        return "Renault";
    };
    AutoCiudad.prototype.getModelo = function () {
        return 2020;
    };
    AutoCiudad.prototype.getCantidadPuertas = function () {
        return 4;
    };
    return AutoCiudad;
}(Vehiculo));
var autoUrbano = new AutoCiudad();
autoUrbano.imprimirMarca();
autoUrbano.imprimirModelo();
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeportivo.prototype.getMarca = function () {
        return "Nissan";
    };
    AutoDeportivo.prototype.getModelo = function () {
        return 2022;
    };
    AutoDeportivo.prototype.getVelMaxima = function () {
        return 320;
    };
    return AutoDeportivo;
}(Vehiculo));
var deportivo = new AutoDeportivo();
deportivo.imprimirMarca();
deportivo.imprimirModelo();
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.getMarca = function () {
        return "Toyota";
    };
    Camioneta.prototype.getModelo = function () {
        return 2021;
    };
    Camioneta.prototype.getCapPasajeros = function () {
        return 5;
    };
    return Camioneta;
}(Vehiculo));
var camioneta1 = new Camioneta();
console.log(camioneta1.getCapPasajeros());
