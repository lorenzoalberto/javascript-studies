/*
EXERCÍCIO: Métodos da instância e da classe

Crie a classe `Usuario` com nome e email. Ela deve possuir:

Métodos de instância:
- `apresentar()`: retorna "NOME <EMAIL>" usando os dados da própria instância;
- `alterarEmail(novoEmail)`: valida o endereço e atualiza a instância.

Métodos estáticos:
- `emailValido(email)`: retorna true somente quando o valor é uma string que
  contém "@" e possui algum caractere antes e depois dele;
- `comparar(usuarioA, usuarioB)`: retorna true se os emails forem iguais,
  ignorando letras maiúsculas e minúsculas.

Entradas e saídas esperadas:
const ana = new Usuario("Ana", "ana@email.com");
const outraAna = new Usuario("Ana Silva", "ANA@EMAIL.COM");

console.log(ana.apresentar());             // Ana <ana@email.com>
console.log(Usuario.comparar(ana, outraAna)); // true
ana.alterarEmail("novo@email.com");
console.log(ana.email);                    // novo@email.com

Regra: `alterarEmail` deve reutilizar `Usuario.emailValido` e lançar
"Email inválido." quando necessário.
*/

class Usuario {
    // TODO: implemente constructor e os métodos de instância e estáticos.
}

// TODO: execute os casos do exemplo e teste também um email inválido.

