function verificaChute (chute) {
    const numero = +chute

    if(chuteInvalido(numero)){

        if(chute.toUpperCase() === "GAME OVER"){
            document.body.classList.add("gameOver")
            document.body.innerHTML =
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
           
         
          } else {
        elementoChute.innerHTML += '<div> Valor inválido </div>'
        return
          }
    }

    if (numeroMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre entre ${menorValor} e ${maiorValor} </div> `
        return
    }

if (numero === numeroSecreto){
    document.body.innerHTML = `
     <h2>Você acertou !!!</h2>  
    <h3> O número secreto era ${numero} </h3> 

    <button id= "jogar-novamente" class = "btn-jogar"> Jogar novamente</button>

    `
} else if (numero > numeroSecreto){
    elementoChute.innerHTML += ` <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i> </div>`
} else {
    elementoChute.innerHTML += ` <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i> </div>`
}

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido (numero) {
return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})