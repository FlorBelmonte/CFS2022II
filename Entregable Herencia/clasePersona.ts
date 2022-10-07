

class Trabajador {
    protected nombre: string;
    protected puesto: string;
    protected telefono: number;

    public constructor(nombre: string, puesto: string, telefono: number){
        this.nombre = nombre;
        this. puesto = puesto;
        this.telefono = telefono;
    }
}
class Empleado extends Trabajador {
    private sueldo: number;
    public constructor (nombre: string, puesto: string, telefono: number, sueldo: number){
        super(nombre, puesto, telefono)
        this.sueldo = sueldo;
    }
    public calcularImpuestos(){
       this.sueldo = this.sueldo - (this.sueldo*0.3);
    }
}
let empleado1: Empleado = new Empleado('Eduardo Dominguez', 'jefe De Area', 223564747, 60.000)
let empleado2: Empleado = new Empleado('Cristian Lopez', 'cadete', 22345783, 50.000)
console.log(empleado1.calcularImpuestos)
console.log(empleado2.calcularImpuestos)

