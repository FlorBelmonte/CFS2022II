//Ejercicio 1 
class Animal {
    public name: string;
    public makeSound: string;
    constructor(name: string, makeSound: string) {
      this.name = name;
      this.makeSound = makeSound      
    }
    public getMakeSound() {
        return this.makeSound
    }
   }

class Dog extends Animal {
    public constructor(name: string, makeSound: string){
        super(name, makeSound)
    }
}

class Cat extends Animal {
    public constructor (name: string, makeSound: string) {
        super(name, makeSound)
    }
}

let minino: Cat = new Cat ('Pocky', 'wuff wuff');
let firulais: Dog = new Dog('Pocky', 'meow meow');

console.log(minino.getMakeSound());
console.log(firulais.getMakeSound());