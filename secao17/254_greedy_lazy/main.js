/**
 * REGEX — QUANTIFICADORES, GREEDY E LAZY
 *
 * Quantificadores determinam quantas vezes um elemento
 * da expressão regular pode aparecer.
 *
 * Principais:
 *
 * *       → 0 ou mais
 * +       → 1 ou mais
 * ?       → 0 ou 1
 * {n}     → exatamente n
 * {n,}    → n ou mais
 * {n,m}   → entre n e m
 *
 * Por padrão, os quantificadores são GREEDY.
 *
 * Para torná-los LAZY, adicionamos ?:
 *
 * *?
 * +?
 * ??
 * {n,m}?
 */

// ============================================================
// 1. QUANTIFICADOR *
// ============================================================

// * = zero ou mais ocorrências

const regexAsterisco = /ab*c/g;

console.log("=== * (zero ou mais) ===");

console.log("ac".match(regexAsterisco)); // ["ac"]
console.log("abc".match(regexAsterisco)); // ["abc"]
console.log("abbbc".match(regexAsterisco)); // ["abbbc"]

// ============================================================
// 2. QUANTIFICADOR +
// ============================================================

// + = uma ou mais ocorrências

const regexMais = /ab+c/g;

console.log("\n=== + (uma ou mais) ===");

console.log("ac".match(regexMais)); // null
console.log("abc".match(regexMais)); // ["abc"]
console.log("abbbc".match(regexMais)); // ["abbbc"]

// ============================================================
// 3. QUANTIFICADOR ?
// ============================================================

// ? = zero ou uma ocorrência

const regexOpcional = /https?/g;

console.log("\n=== ? (zero ou uma) ===");

console.log("http".match(regexOpcional)); // ["http"]
console.log("https".match(regexOpcional)); // ["https"]

// ============================================================
// 4. QUANTIFICADOR {n}
// ============================================================

// {n} = exatamente n ocorrências

const exatamenteTresDigitos = /\d{3}/g;

console.log("\n=== {n} (exatamente n) ===");

console.log("Código: 123".match(exatamenteTresDigitos));
// ["123"]

// ============================================================
// 5. QUANTIFICADOR {n,}
// ============================================================

// {n,} = pelo menos n ocorrências

const doisOuMaisDigitos = /\d{2,}/g;

console.log("\n=== {n,} (n ou mais) ===");

console.log("1 12 123 12345".match(doisOuMaisDigitos));
// ["12", "123", "12345"]

// ============================================================
// 6. QUANTIFICADOR {n,m}
// ============================================================

// {n,m} = entre n e m ocorrências

const entreDoisEQuatroDigitos = /\d{2,4}/g;

console.log("\n=== {n,m} (entre n e m) ===");

console.log("1 12 123 1234".match(entreDoisEQuatroDigitos));
// ["12", "123", "1234"]

// ============================================================
// 7. GREEDY
// ============================================================

/**
 * Quantificadores são greedy por padrão.
 *
 * Isso significa que tentam consumir a maior quantidade
 * possível de caracteres sem fazer a regex inteira falhar.
 */

const html = "<div>Olá</div><div>Mundo</div>";

const regexGreedy = /<div>.*<\/div>/g;

console.log("\n=== GREEDY ===");

console.log(html.match(regexGreedy));

/*
Resultado:

[
  "<div>Olá</div><div>Mundo</div>"
]

O .* pega tudo entre o primeiro <div>
e o último </div>.
*/

// ============================================================
// 8. LAZY / NON-GREEDY
// ============================================================

/**
 * Ao colocar ? depois de um quantificador,
 * transformamos seu comportamento em lazy.
 *
 * O lazy tenta consumir a menor quantidade possível.
 */

const regexLazy = /<div>.*?<\/div>/g;

console.log("\n=== LAZY ===");

console.log(html.match(regexLazy));

/*
Resultado:

[
  "<div>Olá</div>",
  "<div>Mundo</div>"
]
*/

// ============================================================
// 9. GREEDY VS LAZY COM +
// ============================================================

const letras = "aaaaa";

console.log("\n=== + vs +? ===");

console.log(letras.match(/a+/g));
// ["aaaaa"]

console.log(letras.match(/a+?/g));
// ["a", "a", "a", "a", "a"]

// ============================================================
// 10. GREEDY VS LAZY COM {n,m}
// ============================================================

const numeros = "12345";

console.log("\n=== {2,4} vs {2,4}? ===");

console.log(numeros.match(/\d{2,4}/g));
// ["1234"]

console.log(numeros.match(/\d{2,4}?/g));
// ["12", "34"]

// ============================================================
// RESUMO
// ============================================================

/*

GREEDY:

*       → 0 ou mais, tentando pegar o máximo
+       → 1 ou mais, tentando pegar o máximo
?       → 0 ou 1, preferindo 1
{n,m}   → entre n e m, preferindo m


LAZY:

*?      → 0 ou mais, tentando pegar o mínimo
+?      → 1 ou mais, tentando pegar o mínimo
??      → 0 ou 1, preferindo 0
{n,m}?  → entre n e m, tentando pegar o mínimo


REGRA MENTAL:

GREEDY → pega o máximo possível.

LAZY → pega o mínimo necessário para que
       o restante da expressão regular funcione.

*/
