/*
EXERCÍCIO: Herança de funcionários

Crie a classe `Funcionario` com `nome` e `salario` no constructor. Ela deve ter
o método `descrever()`, que retorna "NOME recebe R$ SALARIO" com duas casas.

Crie a classe `Gerente`, que herda de `Funcionario`, recebe também `bonus` e:
- usa `super` para inicializar nome e salário;
- sobrescreve `descrever()` para considerar salário + bônus;
- possui `liderar()`, que retorna "NOME está liderando a equipe.".

Entrada e saída esperada:
const gerente = new Gerente("Carla", 5000, 1000);
console.log(gerente.descrever());
// Carla recebe R$ 6000.00
console.log(gerente.liderar());
// Carla está liderando a equipe.
console.log(gerente instanceof Gerente);     // true
console.log(gerente instanceof Funcionario); // true
*/

class Funcionario {
    // TODO: implemente o constructor e o método descrever.
}

class Gerente extends Funcionario {
    // TODO: implemente constructor, sobrescrita e método próprio.
}

// TODO: crie a gerente do exemplo e execute todos os testes.

