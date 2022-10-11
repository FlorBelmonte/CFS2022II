

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

    public calcularAumento(){
        let sueldoActual: number = this.sueldo
        let nuevoSueldo : number;
        if ( 0 < sueldoActual && sueldoActual <= 50000 ) {
            nuevoSueldo = sueldoActual * 1.2;
            console.log("Le corresponde un aumento del 20%");
    
    }
    }
}
let empleado1: Empleado = new Empleado('Eduardo Dominguez', 'jefe De Area', 223564747, 60000)
let empleado2: Empleado = new Empleado('Cristian Lopez', 'cadete', 22345783, 50000)
let empleado3: Empleado = new Empleado ('Marcela Lopez', 'cadete', 223467584, 45000 )
console.log(empleado1.calcularAumento())
console.log(empleado2.calcularAumento())
console.log(empleado3.calcularAumento())
