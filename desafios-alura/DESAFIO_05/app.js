let alturaImc = document.getElementById('alturaImc');
let pesoImc = document.getElementById('pesoImc');
let resultadoDoImc = document.getElementById('resultadoDoImc');
let botaoImc = document.getElementById('botaoImc')

botaoImc.addEventListener('click', calcularImc);

function calcularImc() {
    let imcCalculado = pesoImc.value / (alturaImc.value * alturaImc.value);
    imcCalculado = imcCalculado.toFixed(2);
    resultadoDoImc.innerHTML = `<p>O seu IMC é: ${imcCalculado}.`;
    console.log(imcCalculado);
}

