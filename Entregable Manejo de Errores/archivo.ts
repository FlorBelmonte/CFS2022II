
class Alumno {
    private nombre: string;
    private nota: number;
    private DNI: number;

    public constructor(nombre: string, nota: number, DNI: number) {
        this.nombre = nombre;
        this.nota = nota;
        this.DNI = DNI;
    }

    public getNota() {
        return this.nota;
    }

    public estaAprobado() {
        if(this.nota <0){
            throw new Error("Los numeros negativos no son validos como nota")
        } else if (this.nota>0 && this.nota<7){
            console.log("El alumno esta desaprobado")
        }else if(this.nota>=7 && this.nota <=10) {
            console.log("el alumno esta aprobado")
        } else if (this.nota > 10){
            throw new Error ("Las notas mayores a 10 no son validas")
        }
        }
    }
    let alumno1 : Alumno = new Alumno('Gloria Dominguez', -8, 252546346);
    let alumno2 : Alumno = new Alumno('Juan Dominguez', 5, 25254255);
    let alumno3 : Alumno = new Alumno('Gloria Dominguez', 8, 252546346);
    let alumno4 : Alumno = new Alumno('Juan Dominguez', 15, 25254255);
    
    try {
        alumno1.estaAprobado();
    }catch(error){
        console.log("dato invalido:" + error.message)
    }

    // ----------------------------------------------------------------------------------------------
    class Operario{
        private nombre: string;
        private sueldo: number;

        constructor(nombre: string, sueldo: number){
            this.nombre = nombre;
            this.sueldo = sueldo;
        }
    public getSueldo(){
        return this.sueldo
    }
    public AumentoSueldo(){
        let nuevoSueldo = 0
        if(this.sueldo< 80000){
            throw new Error("El sueldo no puede ser inferior a ese monto");
        }
        else if (this.sueldo > 80.000){
           nuevoSueldo = this.sueldo * 1.05
        }
        return nuevoSueldo
    }
    }
let trabajador1: Operario = new Operario("Marcos", 84000);
let trabajador2: Operario = new Operario("Juan", 76000);

    try {
        trabajador2.AumentoSueldo();
    } catch (error) {
        console.log("ocurrio un error esperado..")
    }
console.log(trabajador2.AumentoSueldo())


