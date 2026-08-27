/*
EXERCÍCIO: Filtrar produtos

Use `filter` para criar um array apenas com produtos ativos que custam no
máximo R$ 100. O array original não deve ser alterado.

Saída esperada:
[
  { nome: 'Mouse', preco: 80, ativo: true },
  { nome: 'Cabo', preco: 25, ativo: true }
]
*/

const produtos = [
  { nome: "Mouse", preco: 80, ativo: true },
  { nome: "Teclado", preco: 150, ativo: true },
  { nome: "Fone", preco: 90, ativo: false },
  { nome: "Cabo", preco: 25, ativo: true },
];

const produtosAtivosMax100 = produtos.filter(
  // não precisa colocar "produto.ativo == true" porque já é uma operação binária
  (produto) => produto.preco <= 100 && produto.ativo,
);
console.log(produtosAtivosMax100);
