/*
EXERCÍCIO: Carrinho protegido com IIFE

Use uma IIFE para criar um pequeno módulo de carrinho de compras. A IIFE deve
manter o array de itens privado e retornar um objeto com três métodos:

- adicionar(nome, preco): adiciona um produto ao carrinho;
- listar(): retorna uma cópia do array de produtos;
- calcularTotal(): retorna a soma dos preços.

Entrada de exemplo:
carrinho.adicionar("Livro", 40);
carrinho.adicionar("Caneta", 5);

Saída esperada:
[
  { nome: "Livro", preco: 40 },
  { nome: "Caneta", preco: 5 }
]
Total: R$ 45.00

Regras:
1. O array de itens deve existir somente dentro da IIFE.
2. `listar()` deve retornar uma cópia, evitando que o array privado seja
   alterado diretamente por quem usa o módulo.
3. Exiba o total com duas casas decimais.

Desafio extra:
Crie também o método `remover(nome)`, que remove do carrinho o primeiro produto
com o nome informado e retorna `true`. Se não encontrar o produto, retorna
`false`.
*/

const carrinho = /* TODO: crie e execute a IIFE aqui */ undefined;

// TODO: adicione os produtos do exemplo.
// TODO: exiba a lista de produtos e o total.
// TODO (desafio extra): implemente e teste o método remover.

