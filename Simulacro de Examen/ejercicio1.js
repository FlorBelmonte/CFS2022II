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
//Ejercicio 1 
//Cree una clase padre con el atributo que tenian en común y dos subclases Dog y Cat
var Animal = /** @class */ (function () {
    function Animal(name, makeSound) {
        this.name = name;
        this.makeSound = makeSound;
    }
    Animal.prototype.getMakeSound = function () {
        return this.makeSound;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, makeSound) {
        return _super.call(this, name, makeSound) || this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, makeSound) {
        return _super.call(this, name, makeSound) || this;
    }
    return Cat;
}(Animal));
var minino = new Cat('Pocky', 'wuff wuff');
var firulais = new Dog('Pocky', 'meow meow');
console.log(minino.getMakeSound());
console.log(firulais.getMakeSound());
