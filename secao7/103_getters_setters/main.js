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
    if (!novoNome) {
      throw new Error("O nome não pode ser vazio.");
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
      throw new Error("A idade não pode ser negativa.");
    }

    this._idade = novaIdade;
  }
}

const pessoa = new Pessoa("Lorenzo", 25);

console.log(pessoa.nome); // Lorenzo
console.log(pessoa.idade); // 25

pessoa.nome = "João";
pessoa.idade = 30;

console.log(pessoa.nome); // João
console.log(pessoa.idade); // 30
