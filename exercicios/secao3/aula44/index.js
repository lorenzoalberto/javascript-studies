const peso = 120;
const alturaMetro = 1.71;

const pesoValido = Number.isFinite(peso) && peso > 0;
const alturaValida = Number.isFinite(alturaMetro) && alturaMetro > 0;

if (!pesoValido) {
    console.log("Peso inválido");
} else if (!alturaValida) {
    console.log("Altura inválida");
} else {
    const resultadoIMC = peso / (alturaMetro * alturaMetro);
    const mensagem = `Seu IMC é ${resultadoIMC.toFixed(2)}`;

    if (resultadoIMC < 18.5) {
        console.log(`${mensagem} (Abaixo do peso)`);
    } else if (resultadoIMC <= 24.9) {
        console.log(`${mensagem} (Peso normal)`);
    } else if (resultadoIMC <= 29.9) {
        console.log(`${mensagem} (Sobrepeso)`);
    } else if (resultadoIMC <= 34.9) {
        console.log(`${mensagem} (Obesidade grau 1)`);
    } else if (resultadoIMC <= 39.9) {
        console.log(`${mensagem} (Obesidade grau 2)`);
    } else {
        console.log(`${mensagem} (Obesidade grau 3)`);
    }
}
