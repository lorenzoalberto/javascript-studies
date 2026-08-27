/*
EXERCÍCIO: Controle de estoque com Map

Use um `Map` para controlar produtos. A chave será o código numérico e o valor
será um objeto com `nome` e `quantidade`.

Crie as funções:
- `cadastrar(codigo, nome, quantidade)`: adiciona um produto e retorna true;
  se o código já existir, não altera o produto e retorna false;
- `adicionarEstoque(codigo, quantidade)`: aumenta a quantidade e retorna o
  novo total; se o código não existir, retorna null;
- `removerProduto(codigo)`: remove e retorna o resultado de `Map.delete`;
- `quantidadeTotal()`: soma a quantidade de todos os produtos.

Operações de exemplo:
cadastrar(101, "Teclado", 3) -> true
cadastrar(205, "Mouse", 5)   -> true
cadastrar(101, "Outro", 10)  -> false
adicionarEstoque(101, 2)      -> 5
adicionarEstoque(999, 2)      -> null
quantidadeTotal()             -> 10
removerProduto(205)           -> true
quantidadeTotal()             -> 5

Desafio extra:
Crie `listarProdutos()`, que retorna um array com código, nome e quantidade de
cada produto, sem expor os objetos internos para alteração externa.
*/

const estoque = new Map();

function cadastrar(codigo, nome, quantidade) {
    // TODO: valide a existência do código e cadastre o produto.
}

function adicionarEstoque(codigo, quantidade) {
    // TODO: atualize a quantidade ou retorne null.
}

function removerProduto(codigo) {
    // TODO: remova o código e retorne o resultado da operação.
}

function quantidadeTotal() {
    // TODO: percorra os valores do Map e retorne o total.
}

// TODO: execute todas as operações do exemplo.
// TODO (desafio extra): implemente e teste listarProdutos.

