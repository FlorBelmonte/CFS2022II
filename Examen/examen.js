//Crear una clase -con al menos 2 métodos y 2 atributos-
//Crear un objeto
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
var Producto = /** @class */ (function () {
    function Producto(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    Producto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Producto.prototype.imprimir = function () {
        console.log("C\u00F3digo:".concat(this.codigo, " Descripci\u00F3n:").concat(this.descripcion, " Precio:").concat(this.precio));
    };
    return Producto;
}());
var articulo = new Producto(221, "Agua Mineral", 145);
articulo.imprimir();
//Relación de herencia 
var Comestibles = /** @class */ (function (_super) {
    __extends(Comestibles, _super);
    function Comestibles(codigo, descripcion, precio, tipoAlimento) {
        var _this = _super.call(this, codigo, descripcion, precio) || this;
        _this.tipoAlimento = tipoAlimento;
        return _this;
    }
    Comestibles.prototype.getTipoAlimento = function () {
        return this.tipoAlimento;
    };
    return Comestibles;
}(Producto));
var Limpieza = /** @class */ (function (_super) {
    __extends(Limpieza, _super);
    function Limpieza(codigo, descripcion, precio, tipoEnvase) {
        var _this = _super.call(this, codigo, descripcion, precio) || this;
        _this.tipoEnvase = tipoEnvase;
        return _this;
    }
    Limpieza.prototype.getTipoEnvase = function () {
        return this.tipoEnvase;
    };
    return Limpieza;
}(Producto));
var producto1 = new Comestibles(298, "Yogurt", 235, "Lacteo");
producto1.imprimir();
var producto2 = new Limpieza(321, "Lavandina", 170, "botella");
producto2.imprimir();
var Mercado = /** @class */ (function () {
    function Mercado(nombre, direccion, empleados) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.empleados = empleados;
    }
    Mercado.prototype.getNombre = function () {
        return this.nombre;
    };
    return Mercado;
}());
var minimercado = new Mercado("Mercado Avenida", 235, 5);
console.log(minimercado);
//Clase abstracta 
var Negocio = /** @class */ (function () {
    function Negocio() {
    }
    Negocio.prototype.imprimirNombre = function () {
        console.log("El nombre del comercio es: ".concat(this.getNombre));
    };
    return Negocio;
}());
var Kiosco = /** @class */ (function (_super) {
    __extends(Kiosco, _super);
    function Kiosco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kiosco.prototype.getNombre = function () {
        return "Dulce Esquina";
    };
    return Kiosco;
}(Negocio));
var kiosco1 = new Kiosco();
kiosco1.imprimirNombre();
