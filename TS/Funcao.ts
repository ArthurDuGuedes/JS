type Funcao = (a: number, b:number) => number

function Soma(a:number, b:number):number{
    return a + b
}

const SomaArrow: Funcao = (a,b) => a + b 

const somaAnonima: Funcao = function(a,b){

    return b + a
}


const somaRetornoImplicito: Funcao = (a,b) => a + b

function somaParametro(a: number, b?: number): number {
    if (b ) {
        return a + b;
    }
    return a;
}

console.log(somaParametro(1,2))
console.log(somaAnonima(8, 1))