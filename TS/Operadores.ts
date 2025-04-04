//instalar typescript com o comando npm install -g typescript
//Para atualizar o typescript com o comando npm update -g typescript

//Operadores aritimeticos

let a: number = 10
let b: number = 5

let soma: number = a + b
let subtracao: number = a - b
let multiplicacao: number = a * b
let divisao: number = a / b
let modulo: number = a % b

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)

let nome:string = "Lucas "
let sobrenome:string = "Silva "

let textoConcat: string = nome + sobrenome
// console.log(textoConcat)

let repetit:string = textoConcat.repeat(3)
console.log(repetit)


let comparacao1:boolean = a == b
let comparacao1_5:boolean = a === b
let comparacao2:boolean = a != b
let comparacao2_5:boolean = a !== b 
let comparacao3:boolean = a > b
let comparacao4:boolean = a < b
let comparacao5:boolean = a >= b
let comparacao6:boolean = a <= b    

console.log(`Comparacao 1: ${comparacao1} \nComparacao 1.5: ${comparacao1_5} \nComparacao 2: ${comparacao2} \nComparacao 2.5: ${comparacao2_5} \nComparacao 3: ${comparacao3} \nComparacao 4: ${comparacao4} \nComparacao 5: ${comparacao5} \nComparacao 6: ${comparacao6}`)    


let comparacao7:boolean = a > 0 && b > 0
let comparacao8:boolean = a > 0 || b > 0
let comparacao9:boolean = !(a > 0 && b > 0)

console.log(`Comparacao 7: ${comparacao7} \nComparacao 8: ${comparacao8} \nComparacao 9: ${comparacao9}`) 

let resultado:string = (a > b) ? "A é maior que B" : "B é maior que A"

console.log(resultado)


let valor:number = 10 


valor += 5
console.log(valor)
valor = 10

valor -= 5
console.log(valor)
valor = 10

valor *= 5
console.log(valor)
valor = 10 

valor /= 5
console.log(valor)
valor = 10

valor %= 5 
console.log(valor)
valor = 10

let contador: number = 0

contador ++
console.log(contador)
contador = 0

contador -- 
console.log(contador)


let valorNulo:number | null = null 
let valorDefault:number = valorNulo ?? 10
console.log(valorNulo)

let lista:number[] = [1,2,3,4,5]
console.log(lista)

let novos:number[] = [...lista, 6,7,8,9]
console.log(novos)


let pessoa: { nome:string; idade:number} = {
    nome: "Gabriel Colaman",
    idade:45
}

let {nome: nomePessoa, idade: idadePessoa} = pessoa

console.log(nomePessoa, idadePessoa)


let objeto: { nome:string , idade:number } = {
    nome:" Gueixo",
    idade: 21
}


let resultado2:{ [key:string]:number } ={
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao,
    resto: modulo
}


for (let i in resultado2) {
    console.log(`${i}: ${resultado2[i]}` );
}



//npx tsc --init
//npx ts-node Nome_arquivo.ts