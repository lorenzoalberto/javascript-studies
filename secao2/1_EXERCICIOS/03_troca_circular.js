/*
EXERCÍCIO: Troca circular

Faça cada variável receber o valor da variável seguinte. O valor de `terceiro`
deve ir para `primeiro`. Não escreva os valores diretamente na atribuição.

Entrada: primeiro = "A", segundo = "B", terceiro = "C"
Saída esperada: B C A

Desafio extra: resolva uma vez com variável auxiliar e outra com desestruturação.
*/

let primeiro = "A";
let segundo = "B";
let terceiro = "C";

// variável auxiliar
let x = primeiro;
primeiro = segundo;
segundo = terceiro;
terceiro = x;

console.log(primeiro, segundo, terceiro);

primeiro = "A";
segundo = "B";
terceiro = "C";

// desestruturação
[primeiro, segundo, terceiro] = [segundo, terceiro, primeiro];
console.log(primeiro, segundo, terceiro);
