function olaMundo() {
    console.log('Olá, mundo!');
}

function seuNome() {
    let nomeDigitado = document.querySelector('input').value;
    console.log(`Olá, ${nomeDigitado}!`);
}

function dobrarNumero() {
    let numeroDigitado = parseInt(document.getElementById('numeroDigitado').value);
    numeroDigitado = numeroDigitado * 2;
    console.log(`O dobro do número digitado é ${numeroDigitado}`);
}

function mediaAritimetica() {
    let numero1 = parseInt(document.getElementById('numeroMedia1').value)
    let numero2 = parseInt(document.getElementById('numeroMedia2').value)
    let numero3 = parseInt(document.getElementById('numeroMedia3').value)

    let resultadoMedia = (numero1 + numero2 + numero3) / 3

    console.log(`A média aritimética dos números é ${resultadoMedia.toFixed(2)}`)
}

function verificarMaior() {
    let numeroMaior1 = parseInt(document.getElementById('numeroMaior1').value)
    let numeroMaior2 = parseInt(document.getElementById('numeroMaior2').value)

    if (numeroMaior1 > numeroMaior2) {
        console.log(`Esse é o maior número ${numeroMaior1}`)
    } else {
        console.log(`Esse é o maior número ${numeroMaior2}`)
    }
}

function multiplicarPorEle() {
    let multiplicadoPorEle = parseInt(document.getElementById('multiplicadoPorEle').value)
    
    multiplicadoPorEle = multiplicadoPorEle * multiplicadoPorEle

    console.log(`O valor da multiplicação por ele mesmo é ${multiplicadoPorEle}`)
}

