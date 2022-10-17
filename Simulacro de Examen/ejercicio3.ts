class Persona {
    public name: string;
    public lastName: string;

    public constructor (name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    }
    public imprimir() {
        console.log(`Nombre: ${this.name}`);
}
}
class Empleado extends Persona {
    private sueldo: number;
    public constructor (name: string, lastName: string, sueldo: number){
        super(name, lastName)
        this.sueldo = sueldo;
    }
    public imprimir() {
        console.log(`Sueldo: ${this.sueldo}`);      
      }
}
let empleado1 : Empleado = new Empleado('Nicolas', 'Rodriguez', 80000)
empleado1.imprimir();