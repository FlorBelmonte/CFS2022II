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
var Trabajador = /** @class */ (function () {
    function Trabajador(nombre, puesto, telefono) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.telefono = telefono;
    }
    return Trabajador;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, puesto, telefono, sueldo) {
        var _this = _super.call(this, nombre, puesto, telefono) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.calcularAumento = function () {
        var sueldoActual = this.sueldo;
        var nuevoSueldo;
        if (0 < sueldoActual && sueldoActual <= 50000) {
            nuevoSueldo = sueldoActual * 1.2;
            console.log("Le corresponde un aumento del 20%");
        }
    };
    return Empleado;
}(Trabajador));
var empleado1 = new Empleado('Eduardo Dominguez', 'jefe De Area', 223564747, 60000);
var empleado2 = new Empleado('Cristian Lopez', 'cadete', 22345783, 50000);
var empleado3 = new Empleado('Marcela Lopez', 'cadete', 223467584, 45000);
console.log(empleado1.calcularAumento());
console.log(empleado2.calcularAumento());
console.log(empleado3.calcularAumento());
