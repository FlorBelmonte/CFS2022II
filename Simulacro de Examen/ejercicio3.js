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
var Persona = /** @class */ (function () {
    function Persona(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: ".concat(this.name));
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(name, lastName, sueldo) {
        var _this = _super.call(this, name, lastName) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.imprimir = function () {
        // super.imprimir();
        console.log("Sueldo: ".concat(this.sueldo));
    };
    return Empleado;
}(Persona));
var empleado1 = new Empleado('Nicolas', 'Rodriguez', 80000);
empleado1.imprimir();
