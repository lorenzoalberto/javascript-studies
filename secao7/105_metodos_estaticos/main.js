// Métodos de instância e estáticos
class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  static validarIdade(idade) {
    return idade >= 18;
  }
}

const usuario = new Usuario("Lorenzo", 25);

// Método da instância:
console.log(usuario.nome);

// Método estático:
console.log(Usuario.validarIdade(20)); // true
