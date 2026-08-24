/*
EXERCÍCIO: Investigador de strings

A partir da frase abaixo, exiba:
1. a quantidade total de caracteres;
2. a primeira e a última palavra;
3. a frase em letras maiúsculas;
4. a posição da primeira ocorrência de "JavaScript";
5. um array contendo todas as palavras.

Entrada:
"Eu estudo JavaScript todos os dias"

Saída esperada:
34
Eu
dias
EU ESTUDO JAVASCRIPT TODOS OS DIAS
10
[ 'Eu', 'estudo', 'JavaScript', 'todos', 'os', 'dias' ]
*/

const frase = "Eu estudo JavaScript todos os dias";

const palavrasFrase = frase.split(" "); // .split() já retorna um array, então [...frase.split(" ")] não é necessário

console.log(frase.length);
console.log(palavrasFrase[0]);
console.log(palavrasFrase[palavrasFrase.length - 1]);
console.log(frase.toUpperCase());
console.log(frase.indexOf("JavaScript"));
console.log(palavrasFrase);
