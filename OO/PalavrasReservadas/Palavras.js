let lista1 = ["Lucas", "Maria", " Jose", "Pedro"]	
let [nome1 , nome2, nome3, nome4] = lista1 

console.log(nome1, nome2, nome3, nome4)


let lista = ["Lucas", "Maria", " Jose", "Pedro", "Joaquim", "Joao", "Joana"]

let [nome5, ...resto] = lista

console.log(resto)