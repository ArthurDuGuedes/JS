function saudarTratado():void{

    
    const input = document.getElementById("nome")

    if(input && input instanceof HTMLInputElement){
        const nome = input.value.trim()

        
        if (nome === "") {
            alert("Digite seu nome")
        }
        else{
            console.error("Bem vindo " + nome)
        }
    }
    else{
        alert("Elemento com id 'saudacao' nao encontrado")
        
    }
}