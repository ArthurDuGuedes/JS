import { Pessoa } from "./Pessoa"
import { Conta, ContaCorrente } from "./Conta";


function main()
{
    try {
        const cliente1 = new Pessoa("joão", 20)
        const cliente2 = new Pessoa("pedro", 20)

        const conta1 = new Conta(cliente1, 100)
        const conta2 = new ContaCorrente(cliente2, 100, 1000)

        conta1.depositar(500)
        console.log(conta1.exibirDados())

        conta2.depositar(500)
        console.log(conta2.exibirDados())

        conta1.sacar(100)
        console.log(conta1.exibirDados())

        conta2.sacar(100)
        console.log(conta2.exibirDados())

    } catch (error: any) {
        console.error("Erro foi:" + error.message)
    }
}

main()