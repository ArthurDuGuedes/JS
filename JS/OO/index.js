import { cobra } from "./cobra.js";
import { Sapo } from "./sapo.js";
import { Animal } from "./objeto.js";


let cobra1 = new cobra("CobraCururu", "Cobra", 10, "Vermelha");     

console.log(cobra1);

cobra1.procriar();

let sapo1 = new Sapo("SapoCururu", "Sapão", 10, 1, "Azul Escuro");

console.log(sapo1);

sapo1.procriar();

sapo1.verificarSeCego();

let animal1 = new Animal("AnimalCururu", "Animal", 10, 1);

console.log(animal1);

animal1.emitirSom();

animal1.procriar();

animal1.mover();


// comando para cirar o package.json npm init -y
