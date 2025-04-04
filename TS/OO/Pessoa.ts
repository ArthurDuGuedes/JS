export class Pessoa {
    private nome: string 
    private idade: number 

    constructor(nome: string, idade:number){
        this.nome = nome 
        this.idade = idade
    }

    public getNome():string{
        return this.nome
    }
    public setNome(novoNome:string): void {
        if(novoNome.length < 3)
        {
            throw new Error("O nome deve ter pelo menos 3 caracteres")

        }
        this.nome =novoNome
    }

    public getIdade():number{
        return this.idade
    }

    public setIdade(novaIdade:number): void {
        if(novaIdade < 0)
        {
            throw new Error("A idade nao pode ser negativa")
        }
        this.idade =novaIdade
    }

    public exibirDados():string{
        return `Nome: ${this.nome}, idade: ${this.idade}`
    }



}