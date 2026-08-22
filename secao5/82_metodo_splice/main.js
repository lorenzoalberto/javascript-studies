// Método Splice
// Sintaxe: <array>.splice(indiceInicial, quantidadeParaRemover, itensParaAdicionar)

// Removendo elementos
const frutas = ["Maçã", "Banana", "Uva", "Morango"];

frutas.splice(1, 2);

console.log(frutas);

// Adicionando elementos
frutas.splice(1, 0, "Morango");

console.log(frutas);

// Substituindo elementos
frutas.splice(1, 1, "Morango");

console.log(frutas);
