class Trabajador {
    constructor(nombre, puesto, telefono) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.telefono = telefono;
    }
}
class Empleado extends Trabajador {
    constructor(nombre, puesto, telefono, sueldo) {
        super(nombre, puesto, telefono);
        this.sueldo = sueldo;
    }
    calcularImpuestos() {
        this.sueldo = this.sueldo - (this.sueldo * 0.3);
    }
}
let empleado1 = new Empleado('Eduardo Dominguez', 'jefe De Area', 223564747, 60.000);
let empleado2 = new Empleado('Cristian Lopez', 'cadete', 22345783, 50.000);
console.log(empleado1.calcularImpuestos);
console.log(empleado2.calcularImpuestos);
