// Herança
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }

  emitirSom() {
    console.log("Som genérico de animal.");
  }
}

class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    // Chama o constructor da classe Animal
    super(nome, idade);

    this.raca = raca;
  }

  // Sobrescrevendo um método herdado
  emitirSom() {
    console.log("Au au!");
  }

  mostrarRaca() {
    console.log(`${this.nome} é da raça ${this.raca}.`);
  }
}

const cachorro = new Cachorro("Thor", 4, "Golden Retriever");

cachorro.apresentar(); // herdado de Animal
cachorro.emitirSom(); // sobrescrito por Cachorro
cachorro.mostrarRaca(); // próprio de Cachorro
