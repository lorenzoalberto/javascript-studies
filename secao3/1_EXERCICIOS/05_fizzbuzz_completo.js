/*
EXERCÍCIO: FizzBuzz completo

Crie `fizzBuzz(numero)`. Retorne "FizzBuzz" para múltiplos de 3 e 5, "Fizz"
para múltiplos de 3, "Buzz" para múltiplos de 5 e o próprio número nos demais
casos. Para valores que não sejam inteiros entre 0 e 100, retorne "Inválido".
Depois, use um laço para exibir o resultado de 0 a 100.

Casos importantes:
3 -> Fizz | 5 -> Buzz | 15 -> FizzBuzz | 7 -> 7 | "15" -> Inválido
*/

function fizzBuzz(numero) {
  const numeroValido =
    Number.isFinite(numero) &&
    numero >= 0 &&
    numero <= 100 &&
    Number.isInteger(numero);

  if (numeroValido) {
    if (numero % 5 === 0 && numero % 3 === 0) return "FizzBuzz";
    if (numero % 3 === 0) return "Fizz";
    if (numero % 5 === 0) return "Buzz";

    return numero;
  }

  return "Inválido";
}

for (let i = 0; i < 101; i++) console.log(`${i}: ${fizzBuzz(i)}`);
