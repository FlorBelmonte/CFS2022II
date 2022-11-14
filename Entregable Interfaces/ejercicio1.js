var AutoFamiliar = /** @class */ (function () {
    function AutoFamiliar() {
    }
    AutoFamiliar.prototype.arrancar = function () {
        this.velocidadActual = 0;
    };
    AutoFamiliar.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoFamiliar.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return AutoFamiliar;
}());
var AutoCarreras = /** @class */ (function () {
    function AutoCarreras() {
    }
    AutoCarreras.prototype.arrancar = function () {
        console.log("el auto tiene tipo de encendido electrico..");
    };
    AutoCarreras.prototype.acelerar = function () {
        console.log("el auto acelera de 0 a 100 en 5 segundos");
    };
    return AutoCarreras;
}());
