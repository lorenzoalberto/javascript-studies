// Retrovisores com Match e Replace
// ========================================
// RETROVISORES COM MATCH E REPLACE
// ========================================

// 1. Capturando grupos com match()

const nome = "Lorenzo Silva";

const resultado = nome.match(/(\w+)\s(\w+)/);

console.log(resultado[0]); // "Lorenzo Silva"
console.log(resultado[1]); // "Lorenzo"
console.log(resultado[2]); // "Silva"

// 2. Reutilizando grupos com replace()

const nomeInvertido = nome.replace(/(\w+)\s(\w+)/, "$2, $1");

console.log(nomeInvertido);
// "Silva, Lorenzo"

// 3. Backreference dentro da própria Regex

const regexRepeticao = /(\w+)\s\1/;

console.log(regexRepeticao.test("teste teste")); // true
console.log(regexRepeticao.test("teste outro")); // false
