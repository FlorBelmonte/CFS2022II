"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
class Auto {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
}
class RegistroAutomotor {
    constructor(listaAutos) {
        this.listaAutos = listaAutos;
    }
    getListaAutos() {
        return this.listaAutos;
    }
}
class GestorDeArchivos {
    constructor(txtFileLocation) {
        let archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    mostrarArreglo() {
        console.log(this.arregloString);
    }
    getArregloString() {
        return this.arregloString;
    }
}
//Funcion para agregar un nuevo Auto 
function agregarAuto(auto, arrayAutos) {
    let propiedadAuto = auto.split(',');
    let marca = propiedadAuto[0];
    let modelo = Number(propiedadAuto[1]);
    let color = propiedadAuto[2];
    let nuevoAuto = new Auto(marca, modelo, color);
    arrayAutos.push(nuevoAuto);
}
function borrarAuto(arrayAutos, position) {
    let readlineSync = require('readline-sync');
    let marca = readlineSync.question("Ingrese la marca: ");
    let modelo = Number(readlineSync.question("Ingrese el modelo: "));
    let color = readlineSync.question("Ingrese el color: ");
    let nuevoAuto = new Auto(marca, modelo, color);
    delete arrayAutos[position];
    arrayAutos[position] = nuevoAuto;
}
//Inicio programa 
let datos = new GestorDeArchivos('autos.txt');
let arrayAutos = [];
for (let i = 0; i < datos.getArregloString().length; i++) {
    agregarAuto(datos.getArregloString()[i], arrayAutos);
}
console.log(arrayAutos);
console.log(borrarAuto(arrayAutos, 2));
