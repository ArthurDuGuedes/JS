// let carro = {
//     marca: "Fiat",
//     modelo: "Uno",
//     ano: 2010,

//     ligar: function() {
//         console.log("Ligando o carro")
//     }
// }

// console.log(carro)

// carro.ligar()   

// delete carro.ano

// console.log(carro)



// class SuperCarro {
//     constructor(marca, modelo, ano) {
//         this.nome = "Fiat"
//         this.modelo = "Uno"
//         this.ano = 2010
//     }

//     Ligar()
//     {
//         console.log("Ligando o carro")
//     }
// }

// let carro1 = new SuperCarro()

// console.table(carro1)

// carro1.Ligar()

// function Jogador(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// function Time(nome, qtd) {
//     this.nome = nome;
//     this.Qtd = qtd;
//     this.jogadores = [];
    
//     this.addJogadores = function(jogador) {
//         this.jogadores.push(jogador);
//     };
// }


// function compare(obj, construtor) {
//     if (obj instanceof construtor) {
//         console.log("É uma instância de " + construtor.name);
//     } else {
//         console.log("Não é uma instância de " + construtor.name);
//     }
// }


// let jogador1 = new Jogador("Yuri Alberto", 20);
// let jogador2 = new Jogador("Romario", 30);

// let time1 = new Time("Corinthians", 11);

// time1.addJogadores(jogador1);
// time1.addJogadores(jogador2);

// console.log(time1.jogadores);

// compare(jogador1, Jogador);


export class Animal {
    constructor(nome, raca, peso, idade) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
        this.idade = idade;
    }
        getNome(){
            return this.nome 
        }

        setNome(novoNome){
            this.nome = novoNome
        }

        emitirSom(){
            console.log("Emitindo som")
        }

        procriar(){
            console.log("Procriando")
        }

        mover(){
            console.log("Movendo")
        }

}