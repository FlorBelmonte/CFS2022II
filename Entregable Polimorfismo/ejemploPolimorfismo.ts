class Animal {
    private nombre: string;
    private peso: number;
    public desplazamiento: string;

    public constructor (nombre: string, peso: number, desplazamiento: string){
        this.nombre = nombre;
        this.peso = peso;
        this.desplazamiento = desplazamiento;
    }

    public getDesplazamiento(){
        return this.desplazamiento
    }
}
class Acuaticos extends Animal {
    private tipoDeAgua: string;
    public constructor(nombre: string, peso: number, desplazamiento: string, tipoDeAgua: string) {
        super(nombre,peso, desplazamiento)
        this.tipoDeAgua = tipoDeAgua;
    }

}
class Terrestres extends Animal{
    private habitatTerrestre: string;
    public constructor(nombre: string, peso: number, desplazamiento: string, habitatTerrestre: string){
        super(nombre,peso,desplazamiento)
        this.habitatTerrestre = habitatTerrestre;
    }
}
let animalAcuatico1 : Acuaticos = new Acuaticos('Pez dorado',30, 'Nadando', 'Agua Dulce')
let animalAcuatico2 : Acuaticos = new Acuaticos ('Ballena Azul',6000 , 'Vertical', 'Agua Salada')
let animalTerrestre1: Terrestres = new Terrestres ('Tigre', 300, 'Caminando', 'Selva Tropical')
let animalTerrestre2: Terrestres = new Terrestres ('Chimpance', 45, 'Trepar', 'Jungla')

console.log(animalAcuatico1.getDesplazamiento())
console.log(animalTerrestre1.getDesplazamiento())
