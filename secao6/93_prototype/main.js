// Prototypes
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.apresentar = function () {
  return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
};

const lorenzo = new Pessoa("Lorenzo", 25);

console.log(lorenzo.apresentar());
