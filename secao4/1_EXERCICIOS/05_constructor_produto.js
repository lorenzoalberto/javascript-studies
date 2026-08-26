/*
EXERCÍCIO: Constructor de produto

Crie a função construtora `Produto(nome, preco)`. Cada instância deve possuir
o método `aplicarDesconto(porcentagem)`, que altera seu próprio preço, e o
método `descrever()`, que retorna "NOME custa R$ VALOR" com duas casas.

Exemplo:
const produto = new Produto("Cadeira", 200)
produto.aplicarDesconto(10)
produto.descrever() -> Cadeira custa R$ 180.00

Use funções normais nos métodos e observe por que `this` é necessário.
*/

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;

  this.aplicarDesconto = function (porcentagem) {
    const novoPrecoDescontado = this.preco - this.preco * (porcentagem / 100);
    this.preco = novoPrecoDescontado;
    return this.preco;
  };

  this.descrever = function () {
    return `${this.nome} custa R$ ${this.preco.toFixed(2)}`;
  };
}

const produto = new Produto("Cadeira", 200);
console.log(produto.aplicarDesconto(10));
console.log(produto.descrever());
