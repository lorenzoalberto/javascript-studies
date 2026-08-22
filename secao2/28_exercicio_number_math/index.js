// Exercícios com numbers e Math
const num = 55.1987555;

console.log(`Raiz quadrada: ${num ** 0.5}`);
console.log(`${num} é inteiro: ${Number.isInteger(num)}`);
console.log(`É NaN: ${Number.isNaN(num)}`);
console.log(`Arredondado para baixo: ${Math.floor(num)}`);
console.log(`Arredondado para cima: ${Math.ceil(num)}`);
console.log(`Com duas casas decimais: ${num.toFixed(2)}`);
