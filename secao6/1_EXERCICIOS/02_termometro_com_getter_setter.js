/*
EXERCÍCIO: Termômetro com getter e setter

Crie a classe `Termometro`. O constructor recebe uma temperatura em Celsius e
a armazena em `_celsius`.

Implemente:
- getter `celsius`, que retorna `_celsius`;
- setter `celsius`, que aceita somente números finitos maiores ou iguais a
  -273.15. Para valores inválidos, lance um Error com a mensagem
  "Temperatura inválida.";
- getter `fahrenheit`, que retorna `(celsius * 9) / 5 + 32`.

Entradas e saídas esperadas:
const termometro = new Termometro(20);
console.log(termometro.celsius);    // 20
console.log(termometro.fahrenheit); // 68
termometro.celsius = 30;
console.log(termometro.fahrenheit); // 86
termometro.celsius = -300;          // Error: Temperatura inválida.
*/

class Termometro {
    // TODO: implemente constructor, getters e setter.
}

// TODO: execute os testes usando try/catch no caso inválido.

