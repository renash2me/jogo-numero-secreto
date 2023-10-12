function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elemChute.innerHTML += `<div>Valor inválido</div>`;
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elemChute.innerHTML += `
        <div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return
    }

    if (numero > numeroSecreto) {
        elemChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i>
        `;
        return
    }

    if (numero < numeroSecreto) {
        elemChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
        `;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era <span class='numero-secreto'>${numeroSecreto}</span>!</h3>

        <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>
        `;
    }

}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || chute < menorValor;
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function gameover(reconhecimentoGameOver) {
    return 
}

document.body.addEventListener('click', e => {
    if (e.target.id = 'jogar-novamente') {
        window.location.reload();
    }
})