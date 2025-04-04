import { Pessoa } from "./Pessoa"

export class Conta{
    protected titular: Pessoa
    protected saldo: number

    constructor(titular: Pessoa, saldo: number){
        this.titular = titular
        this.saldo = saldo
    }

    public depositar(valor: number): void{
        if(valor <= 0)throw new Error("O valor deve ser maior que zero")
        this.saldo += valor
    }

    public sacar(valor: number):void{
        if (valor <= 0) throw new Error("O valor deve ser maior que zero")
        if (this.saldo < valor) throw new Error("Saldo insuficiente")
        this.saldo -= valor
    }

    public exibirDados():string{
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}`
    }
}

export class Poupanca extends Conta{
    private taxaRendimeento: number
    constructor(titular: Pessoa, saldo: number, taxaRendimeento: number){
        super(titular, saldo)
        this.taxaRendimeento = taxaRendimeento
    }

    public aplicarRendimento():void{
        this.saldo += this.saldo * (this.taxaRendimeento /100)
    }

    public override exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}`
    }
}

export class ContaCorrente extends Conta{
    private limiteChequeEspecial: number
    constructor(titular: Pessoa, saldo: number, limiteChequeEspecial: number){
        super(titular, saldo)
        this.limiteChequeEspecial = limiteChequeEspecial
    }

    public override sacar(valor: number): void {
        if (valor <= 0) throw new Error("O valor deve ser maior que zero")
        if (this.saldo + this.limiteChequeEspecial < valor) throw new Error("Saldo insuficiente")
        this.saldo -= valor
    }

    public override depositar(valor: number): void {
        if (valor <= 0) throw new Error("O valor deve ser maior que zero")
        this.saldo += valor
    }
    
    public calcularLimite(): number {
        return this.limiteChequeEspecial + this.saldo
    }

    public override exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}`
    }   
}