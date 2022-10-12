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
    function Animal(nombre, peso, desplazamiento) {
        this.nombre = nombre;
        this.peso = peso;
        this.desplazamiento = desplazamiento;
    }
    Animal.prototype.getDesplazamiento = function () {
        return this.desplazamiento;
    };
    return Animal;
}());
var Acuaticos = /** @class */ (function (_super) {
    __extends(Acuaticos, _super);
    function Acuaticos(nombre, peso, desplazamiento, tipoDeAgua) {
        var _this = _super.call(this, nombre, peso, desplazamiento) || this;
        _this.tipoDeAgua = tipoDeAgua;
        return _this;
    }
    return Acuaticos;
}(Animal));
var Terrestres = /** @class */ (function (_super) {
    __extends(Terrestres, _super);
    function Terrestres(nombre, peso, desplazamiento, habitatTerrestre) {
        var _this = _super.call(this, nombre, peso, desplazamiento) || this;
        _this.habitatTerrestre = habitatTerrestre;
        return _this;
    }
    return Terrestres;
}(Animal));
var animalAcuatico1 = new Acuaticos('Pez dorado', 30, 'Nadando', 'Agua Dulce');
var animalAcuatico2 = new Acuaticos('Ballena Azul', 6000, 'Vertical', 'Agua Salada');
var animalTerrestre1 = new Terrestres('Tigre', 300, 'Caminando', 'Selva Tropical');
var animalTerrestre2 = new Terrestres('Chimpance', 45, 'Trepar', 'Jungla');
console.log(animalAcuatico1.getDesplazamiento());
console.log(animalTerrestre1.getDesplazamiento());
