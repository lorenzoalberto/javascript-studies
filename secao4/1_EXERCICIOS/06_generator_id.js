/*
EXERCÍCIO: Gerador de IDs

Crie a generator function `gerarIds(inicial)` que produza IDs sem fim,
começando no número informado e aumentando de um em um.

Exemplo:
const ids = gerarIds(100)
ids.next().value -> 100
ids.next().value -> 101
ids.next().value -> 102
*/

function* gerarIds(inicial) {
  while (true) {
    yield inicial++;
  }
}

const ids = gerarIds(100);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
