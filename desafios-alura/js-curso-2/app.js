let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarChute() {
    console.log('O botão foi clicado');
}

function mostrarAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let nomeDaCidade = prompt('Qual o nome de uma cidade do Brasil?');
    alert(`Estive em ${nomeDaCidade} e lembrei de você.`);
}

function botaoSoma() {
    let primeiroNumero = +prompt('Digite um número: ');
    let segundoNumero = +prompt('Digite um segundo número ');
    resultadoDaSoma = primeiroNumero + segundoNumero;
    alert(`O resultado da soma entre os números ${primeiroNumero} + ${segundoNumero} = ${resultadoDaSoma}`);
}