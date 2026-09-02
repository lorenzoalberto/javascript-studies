/*
 * REGEX — CONJUNTOS E RANGES
 *
 * Conjuntos são definidos usando [].
 * Eles representam UM caractere dentre as opções especificadas.
 */

// ======================================================
// 1. CONJUNTOS
// ======================================================

// Aceita "a", "b" ou "c"
const conjunto = /[abc]/;

console.log(conjunto.test("a")); // true
console.log(conjunto.test("b")); // true
console.log(conjunto.test("d")); // false

// ======================================================
// 2. RANGES (INTERVALOS)
// ======================================================

// Qualquer letra minúscula entre "a" e "z"
const minusculas = /[a-z]/;

// Qualquer letra maiúscula entre "A" e "Z"
const maiusculas = /[A-Z]/;

// Qualquer número entre 0 e 9
const numeros = /[0-9]/;

console.log(minusculas.test("g")); // true
console.log(maiusculas.test("G")); // true
console.log(numeros.test("7")); // true

// ======================================================
// 3. COMBINANDO RANGES
// ======================================================

// Aceita letras minúsculas, maiúsculas ou números
const alfanumerico = /[a-zA-Z0-9]/;

console.log(alfanumerico.test("a")); // true
console.log(alfanumerico.test("Z")); // true
console.log(alfanumerico.test("5")); // true
console.log(alfanumerico.test("@")); // false

// ======================================================
// 4. MISTURANDO RANGES E CARACTERES
// ======================================================

// Letras, números ou underscore
const caractereUsuario = /[a-zA-Z0-9_]/;

console.log(caractereUsuario.test("_")); // true
console.log(caractereUsuario.test("x")); // true
console.log(caractereUsuario.test("@")); // false

// ======================================================
// 5. NEGAÇÃO DE CONJUNTOS
// ======================================================

// O ^ dentro de [] significa:
// "qualquer caractere EXCETO estes"

// Qualquer caractere que NÃO seja um número
const naoNumero = /[^0-9]/;

console.log(naoNumero.test("a")); // true
console.log(naoNumero.test("@")); // true
console.log(naoNumero.test("5")); // false

// ======================================================
// 6. CONJUNTOS + QUANTIFICADORES
// ======================================================

// Exatamente 4 números
const quatroNumeros = /^[0-9]{4}$/;

console.log(quatroNumeros.test("2026")); // true
console.log(quatroNumeros.test("123")); // false
console.log(quatroNumeros.test("12345")); // false

// ======================================================
// 7. EXEMPLO PRÁTICO — USERNAME
// ======================================================

// Username deve:
// - começar e terminar dentro do padrão
// - possuir apenas letras, números e _
// - possuir entre 3 e 16 caracteres

const username = /^[a-zA-Z0-9_]{3,16}$/;

console.log(username.test("lorenzo")); // true
console.log(username.test("lorenzo_123")); // true
console.log(username.test("lorenzo@123")); // false
console.log(username.test("ab")); // false
console.log(username.test("usuario_muito_grande")); // false

// ======================================================
// RESUMO
// ======================================================

/*
 * [abc]       -> a, b ou c
 * [a-z]       -> letras minúsculas de a até z
 * [A-Z]       -> letras maiúsculas de A até Z
 * [0-9]       -> números de 0 até 9
 * [a-zA-Z]    -> qualquer letra
 * [a-zA-Z0-9] -> letras ou números
 * [a-z0-9_]   -> minúsculas, números ou _
 * [^0-9]      -> qualquer caractere que NÃO seja número
 *
 * IMPORTANTE:
 *
 * [abc] != abc
 *
 * [abc] -> UM caractere: a OU b OU c
 * abc   -> sequência literal "abc"
 */
