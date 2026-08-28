/*
EXERCÍCIO: Mapear pedidos

Use `map` para gerar um novo array em que cada item tenha `produto` e `total`.
O total é preço vezes quantidade. Não altere os objetos originais.

Saída esperada:
[
  { produto: 'Livro', total: 80 },
  { produto: 'Caneta', total: 15 }
]
*/

const itens = [
  { produto: "Livro", preco: 40, quantidade: 2 },
  { produto: "Caneta", preco: 5, quantidade: 3 },
];

// o intuito do map é transformar algo em outra coisa
const precoTotal = itens.map((item) => {
  return {
    produto: item.produto,
    total: item.preco * item.quantidade,
  };
});

console.log(precoTotal);
