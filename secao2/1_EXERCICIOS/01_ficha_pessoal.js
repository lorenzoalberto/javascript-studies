/*
EXERCÍCIO: Ficha pessoal

Crie constantes para nome, sobrenome, idade, peso e altura. Calcule o IMC e
monte uma única frase usando template string.

Entrada de exemplo:
nome = "Lia", sobrenome = "Souza", idade = 28, peso = 64, altura = 1.68

Saída esperada:
Lia Souza tem 28 anos e seu IMC é 22.68.
*/

const nome = "Lia";
const sobrenome = "Souza";
const idade = 28;
const peso = 64;
const altura = 1.68;

const imc = peso / (altura * altura); // aqui se armazena o valor do IMC, não o calculo - então a váriavel não é
// calculoIMC

console.log(
    `${nome} ${sobrenome} tem ${idade} anos e seu IMC é ${imc.toFixed(2)}.`,
);
