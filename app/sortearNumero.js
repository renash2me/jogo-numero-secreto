const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = gerarNumeroAleatorio();


function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1);
}

const elemMenorValor = document.getElementById('menor-valor');
elemMenorValor.innerHTML = menorValor;

const elemMaiorValor = document.getElementById('maior-valor');
elemMaiorValor.innerHTML = maiorValor;

console.log(`O número secreto é: ${numeroSecreto}`);