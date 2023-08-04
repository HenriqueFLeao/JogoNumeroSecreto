const menorValor =1
const maiorValor =1000
const numeroSecreto = gerarNumeroAleatorio()
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

function gerarNumeroAleatorio(){
    return parseInt(Math.random()* maiorValor + 1  );
}

console.log ('Número Secreto:', numeroSecreto );

elementoMenorValor.innerHTML = menorValor; 
elementoMaiorValor.innerHTML = maiorValor
