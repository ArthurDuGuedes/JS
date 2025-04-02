import { Animal } from "./objeto.js";

export class cobra extends Animal{
    static venenosa = true;

    constructor(nome, raca, peso, cor){
        super(nome, raca, peso, cor)
        this.cor = cor
    }

    procriar(){
        console.log("Procriando cobra")
    }
}