/*
EXERCÍCIO: Relatório numérico

Para o número informado, exiba a raiz quadrada, o valor arredondado para baixo,
o valor arredondado para cima e o valor com duas casas decimais. Informe também
se ele é inteiro e se é NaN.

Entrada: 49.567
Saída esperada:
Raiz: 7.040383512522679
Para baixo: 49
Para cima: 50
Duas casas: 49.57
É inteiro: false
É NaN: false
*/

const numero = 49.567;

console.log(`Raiz: ${Math.sqrt(numero)}`);
console.log(`Para baixo: ${Math.floor(numero)}`);
console.log(`Para cima: ${Math.ceil(numero)}`);
console.log(`Duas casas: ${numero.toFixed(2)}`); // lembrando que retorna uma string
console.log(`É inteiro: ${Number.isInteger(numero)}`);
console.log(`É NaN: ${Number.isNaN(numero)}`);
