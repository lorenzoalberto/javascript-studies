// Polimorfismo
class Animal {
  fazerSom() {
    console.log("O animal faz um som.");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log("Au au!");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau!");
  }
}

class Vaca extends Animal {
  fazerSom() {
    console.log("Muuu!");
  }
}

const animais = [new Cachorro(), new Gato(), new Vaca()];

for (const animal of animais) {
  animal.fazerSom();
}
