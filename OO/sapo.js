import { Animal } from "./objeto.js"; // Certifique-se de que 'objeto.js' exporta corretamente a classe
 
export class Sapo extends Animal { // Nome da classe corrigido (Sapo)
    static Cego = true; 

    constructor(nome, raca, peso, idade, cor) {
        super(nome, raca, peso, idade); 
        this.cor = cor;
    }

    procriar() {
        console.log("Procriando sapo");
    }

    verificarSeCego() { // Nome do método mais descritivo
        console.log(Sapo.Cego ? "Faz tempo que não vê uma..." : "Este sapo enxerga bem.");
    }
}

let sapo1 = new Sapo("SapoCururu", "Sapão", 10, 1, "Azul Escuro");

console.log(sapo1);
sapo1.verificarSeCego(); // Chamada do método para testar
