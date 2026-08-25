/*
EXERCÍCIO: Calculadora segura

Crie `dividir(dividendo, divisor)`. Lance TypeError se algum argumento não for
number finito e Error se o divisor for zero. Retorne a divisão nos demais casos.
Use try/catch para testar todos os casos sem interromper o programa.

Entradas e saídas esperadas:
dividir(10, 2) -> 5
dividir(10, 0) -> Não é possível dividir por zero.
dividir("10", 2) -> Os argumentos precisam ser números finitos.
*/

function dividir(dividendo, divisor) {
  const dividendoValido = Number.isFinite(dividendo);
  const divisorValido = Number.isFinite(divisor);

  if (!dividendoValido || !divisorValido)
    throw new TypeError("Os argumentos precisam ser números finitos.");

  if (divisor === 0) throw new Error("Não é possível dividir por zero.");

  return dividendo / divisor;
}

const testes = [
  [10, 2],
  [10, 0],
  ["10", 2],
];

for (const teste of testes) {
  try {
    console.log(dividir(teste[0], teste[1]));
  } catch (e) {
    console.log(e.message);
  }
}
