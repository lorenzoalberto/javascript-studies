// Variável A deve receber "B"
// Variável B deve receber "C"
// Variável C deve receber "A"

let a = "A";
let b = "B";
let c = "C";
let x;

x = a;
a = b;
b = c;
c = x;

console.log("Variável A: " + a);
console.log("Variável B: " + b);
console.log("Variável C: " + c);

/* 
É possível resolver sem criar uma variável adicional usando desestruturação de arrays:

[a, b, c] = [b, c, a];

O lado direito cria o array e o lado esquerdo desestrutura.

A manobra explícita seria:

const valores = ['B', 'C', 'A'];
[varA, varB, varC] = valores;
*/
