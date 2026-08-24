/*
EXERCÍCIO: Cadastro de produto

Crie uma função `criarProduto(nome, preco, quantidade)` que devolva um objeto
com essas três propriedades e uma propriedade `total` (preço vezes quantidade).
Crie dois produtos, coloque-os em um array e exiba o array.

Entradas:
criarProduto("Teclado", 120, 2)
criarProduto("Mouse", 80, 3)

Saída esperada:
[
  { nome: 'Teclado', preco: 120, quantidade: 2, total: 240 },
  { nome: 'Mouse', preco: 80, quantidade: 3, total: 240 }
]
*/

function criarProduto(nome, preco, quantidade) {
  const total = preco * quantidade;
  return { nome, preco, quantidade, total };
}

const produtos = [];

produtos.push(criarProduto("Teclado", 120, 2));
produtos.push(criarProduto("Mouse", 80, 3));

console.log(produtos);
