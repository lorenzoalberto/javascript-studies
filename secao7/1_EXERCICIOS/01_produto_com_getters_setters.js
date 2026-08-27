/*
EXERCÍCIO: Produto com getters e setters

Crie a classe `Produto`. O constructor deve receber nome e preço e atribuir os
valores através dos setters.

Regras:
- o nome deve ser uma string que, após remover espaços das extremidades, tenha
  pelo menos 3 caracteres;
- o preço deve ser um número finito maior que zero;
- valores inválidos devem lançar um Error com a mensagem "Nome inválido." ou
  "Preço inválido.";
- o getter `precoFormatado` deve retornar o preço com duas casas decimais.

Entrada e saída esperada:
const produto = new Produto("  Teclado  ", 150);
console.log(produto.nome);           // Teclado
console.log(produto.preco);          // 150
console.log(produto.precoFormatado); // R$ 150.00

produto.preco = -10; // Error: Preço inválido.
*/

class Produto {
    // TODO: implemente constructor, getters e setters.
}

// TODO: execute os testes e trate o caso inválido com try/catch.

