/*
EXERCÍCIO: Formas polimórficas

Crie uma classe-base `Forma` com um método `calcularArea()` que lança um Error
com a mensagem "Método calcularArea não implementado.".

Depois, crie duas subclasses:
- `Retangulo`, que recebe largura e altura;
- `Circulo`, que recebe o raio e usa `Math.PI`.

As duas devem sobrescrever `calcularArea()`. Coloque instâncias diferentes no
mesmo array e percorra-o chamando o mesmo método em todas elas.

Entrada:
new Retangulo(5, 4)
new Circulo(3)
new Retangulo(2, 8)

Saída esperada, com duas casas decimais:
20.00
28.27
16.00

Desafio extra:
Adicione a classe `Quadrado`, reutilizando o comportamento de `Retangulo` por
meio de herança.
*/

class Forma {
    // TODO: crie o método-base.
}

class Retangulo extends Forma {
    // TODO: implemente constructor e calcularArea.
}

class Circulo extends Forma {
    // TODO: implemente constructor e calcularArea.
}

const formas = [
    new Retangulo(5, 4),
    new Circulo(3),
    new Retangulo(2, 8),
];

// TODO: percorra as formas e exiba cada área.
// TODO (desafio extra): implemente e teste Quadrado.

