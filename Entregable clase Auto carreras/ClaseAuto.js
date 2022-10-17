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
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
    return Auto;
}());
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera(marca, modelo, color, velocidad) {
        var _this = _super.call(this, marca, modelo, color) || this;
        _this.velocidad = velocidad;
        return _this;
    }
    AutoCarrera.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return AutoCarrera;
}(Auto));
var autoDeCarrera1 = new AutoCarrera('Ferrari', 2018, 'Rojo', 325);
var autoDeCarrera2 = new AutoCarrera('McLaren', 2019, 'Azul', 310);
console.log(autoDeCarrera1.getVelocidad());
console.log(autoDeCarrera2.getVelocidad());
