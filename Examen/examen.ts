//Crear una clase -con al menos 2 métodos y 2 atributos-
//Crear un objeto

class Producto {
    codigo: number;
    descripcion: string;
    precio: number;
  
    constructor(codigo:number, descripcion:string, precio:number) {
      this.codigo=codigo;
      this.descripcion=descripcion;
      this.precio=precio;
    }
    public getCodigo(){
        return this.codigo
    }

    imprimir() {
      console.log(`Código:${this.codigo} Descripción:${this.descripcion} Precio:${this.precio}`);
    }
  }
  let articulo: Producto = new Producto(221, "Agua Mineral", 145)
  articulo.imprimir()
   

  class Comestibles extends Producto{        //Relacion de Herencia
    private tipoAlimento: string;
    public constructor(codigo: number, descripcion: string, precio: number, tipoAlimento: string){
        super(codigo, descripcion, precio);
        this.tipoAlimento = tipoAlimento;
    }
    public getTipoAlimento(){
        return this.tipoAlimento;
    }
  }
  class Limpieza extends Producto{
    private tipoEnvase: string;
    public constructor(codigo: number, descripcion: string, precio: number, tipoEnvase: string){
        super(codigo, descripcion, precio);
        this.tipoEnvase= tipoEnvase;
  } 
    public getTipoEnvase(){
        return this.tipoEnvase;
    }
}

let producto1: Comestibles = new Comestibles(298, "Yogurt", 235, "Lacteo")
producto1.imprimir()
let producto2: Limpieza = new Limpieza (321, "Cloro", 170, "botella");
producto2.imprimir()

//Crear Interfaz 
interface Comercio{
    direccion: number;
    empleados: number
}
class Mercado implements Comercio{
    nombre: string;
    direccion: number;
    empleados: number;
    public constructor(nombre: string, direccion: number, empleados: number){
        this.nombre= nombre;
        this.direccion= direccion;
        this.empleados= empleados;
    }
    public getNombre(){
        return this.nombre;
    }
}
let minimercado: Mercado = new Mercado("Mercado Avenida", 235, 5)
console.log(minimercado)

//Clase abstracta 
abstract class Negocio{
    abstract getNombre(): string;
    imprimirNombre(){
        console.log(`El nombre del comercio es: ${this.getNombre}`)
    }
}
class Kiosco extends Negocio{
    getNombre(): string {
        return "Dulce Esquina"
    }
}
let kiosco1 = new Kiosco();
kiosco1.imprimirNombre(); 

//composición 
class Empresa{
    private nombre: string;
    private direccion: number;
    private clientes: Cliente;

    public constructor(nombre: string, direccion: number, clientes: Cliente){
        this.nombre = nombre;
        this.direccion= direccion;
        this.clientes = clientes;
    }
    public getNombre() : string {
        return this.nombre;
    }
    public getDireccion(){
        return this.direccion
    }
    public getClientes() : Cliente {
        return this.clientes;
    }
}
class Cliente{
    private nombre: string;
    private telefono: number;
    constructor(nombre: string, telefono: number){
        this.nombre = nombre;
        this.telefono = telefono;
    }
    public getNombre() : string {
        return this.nombre;
    }
}

