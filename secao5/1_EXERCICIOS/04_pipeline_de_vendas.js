/*
EXERCÍCIO: Pipeline de vendas

Combine `filter`, `map` e `reduce`, nessa ordem, para:
1. manter somente vendas pagas;
2. transformar cada venda no seu total (preço vezes quantidade);
3. somar os totais.

Saída esperada: 135
*/

const vendas = [
  { preco: 30, quantidade: 2, paga: true },
  { preco: 50, quantidade: 1, paga: false },
  { preco: 25, quantidade: 3, paga: true },
];

const somaTotal = vendas
  .filter((venda) => venda.paga)
  .map((venda) => venda.preco * venda.quantidade)
  .reduce((acumulador, total) => acumulador + total, 0);

console.log(somaTotal); // 135
