/*
EXERCÍCIO: Pipeline com callback

Crie `processarTexto(texto, transformacao)`, que devolve o resultado de chamar
o callback `transformacao` com o texto. Depois crie callbacks para colocar o
texto em maiúsculas e para trocar espaços por hífens.

Entradas e saídas:
processarTexto("curso de js", paraMaiusculas) -> CURSO DE JS
processarTexto("curso de js", paraSlug) -> curso-de-js
*/

function processarTexto(texto, transformacao) {
  return transformacao(texto);
}

function paraMaiusculas(texto) {
  return texto.toUpperCase();
}

function paraSlug(texto) {
  return texto.replaceAll(" ", "-"); // .replace() troca a primeira ocorrência apenas
}

console.log(processarTexto("curso de js", paraMaiusculas));
console.log(processarTexto("curso de js", paraSlug));
