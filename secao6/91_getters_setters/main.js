class Pessoa {
  constructor(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  }

  // Getter
  get nome() {
    return this._nome;
  }

  // Setter
  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log("O nome precisa ter pelo menos 3 caracteres.");
      return;
    }

    this._nome = novoNome;
  }

  // Getter
  get idade() {
    return this._idade;
  }

  // Setter
  set idade(novaIdade) {
    if (novaIdade < 0) {
      console.log("A idade não pode ser negativa.");
      return;
    }

    this._idade = novaIdade;
  }
}

const pessoa = new Pessoa("Lorenzo", 25);

console.log(pessoa.nome); // Lorenzo
console.log(pessoa.idade); // 25

pessoa.nome = "Carlos";
pessoa.idade = 30;

console.log(pessoa.nome); // Carlos
console.log(pessoa.idade); // 30
