// Exercício - Validando um CPF (Algoritmo)
const cpf = "705.484.450-52";
const cpfLimpo = cpf.replace(/\D+/g, "");

const cpfLimpoArray = [...cpfLimpo];
const cpfLimpoArrayNumber = cpfLimpoArray.map((digito) => {
  return (digito = Number(digito)); // não esquecer do return
});

const cpfArrayAnaliseString = [...cpfLimpo].splice(0, 9);
const cpfArrayAnalise = cpfArrayAnaliseString.map((digito) => {
  return (digito = Number(digito)); // não esquecer do return
});

let acumulador = 0;
let i = 10;
for (let numero of cpfArrayAnalise) {
  acumulador = acumulador + numero * i;
  i--;
}
let primeiroDigito = 11 - (acumulador % 11);
primeiroDigito > 9 ? 0 : primeiroDigito;
cpfArrayAnalise.push(primeiroDigito);

acumulador = 0;
i = 11;
for (let numero of cpfArrayAnalise) {
  acumulador = acumulador + numero * i;
  i--;
}
let segundoDigito = 11 - (acumulador % 11);
segundoDigito > 9 ? 0 : segundoDigito;
cpfArrayAnalise.push(segundoDigito);

const saoIguais =
  cpfArrayAnalise.length === cpfLimpoArrayNumber.length &&
  //verifica se todos satisfazem uma condição
  cpfArrayAnalise.every((numero, indice) => {
    return numero === cpfLimpoArrayNumber[indice];
  });

console.log(saoIguais);
