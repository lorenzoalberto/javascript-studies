/*
 * REGEX — LOOKAHEAD E LOOKBEHIND
 *
 * Lookarounds verificam o contexto de um padrão
 * sem incluir essa verificação no resultado do match.
 */

// ========================================
// 1. POSITIVE LOOKAHEAD (?=...)
// ========================================

// Número que seja seguido por " reais"

const texto1 = "O produto custa 150 reais";

const resultado1 = texto1.match(/\d+(?= reais)/);

console.log(resultado1[0]);
// "150"

// ========================================
// 2. NEGATIVE LOOKAHEAD (?!...)
// ========================================

// Número que NÃO seja seguido por " reais"

const regexNegativeLookahead = /\d+(?! reais)/;

console.log(regexNegativeLookahead.test("150 dólares"));
// true

// ========================================
// 3. POSITIVE LOOKBEHIND (?<=...)
// ========================================

// Número precedido por "R$ "

const texto2 = "O produto custa R$ 250";

const resultado2 = texto2.match(/(?<=R\$ )\d+/);

console.log(resultado2[0]);
// "250"

// ========================================
// 4. NEGATIVE LOOKBEHIND (?<!...)
// ========================================

// Número que NÃO seja precedido por "R$ "

const regexNegativeLookbehind = /(?<!R\$ )\d+/;

console.log(regexNegativeLookbehind.test("USD 300"));
// true

// ========================================
// RESUMO
// ========================================

/*
 * (?=...)   Positive Lookahead
 *           Deve existir DEPOIS
 *
 * (?!...)   Negative Lookahead
 *           NÃO deve existir DEPOIS
 *
 * (?<=...)  Positive Lookbehind
 *           Deve existir ANTES
 *
 * (?<!...)  Negative Lookbehind
 *           NÃO deve existir ANTES
 */
