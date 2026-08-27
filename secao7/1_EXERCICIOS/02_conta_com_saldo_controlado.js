/*
EXERCÍCIO: Conta com saldo controlado

Crie uma classe `Conta` cujo saldo seja armazenado em `_saldo`.

Implemente:
- getter `saldo`, que retorna o saldo atual;
- setter `saldo`, que aceita somente números finitos maiores ou iguais a zero
  e lança "Saldo inválido." nos demais casos;
- método de instância `depositar(valor)`, que usa o setter para atualizar o
  saldo e retorna o novo saldo;
- método de instância `sacar(valor)`, que lança "Saldo insuficiente." se o
  valor for maior que o saldo e, caso contrário, retorna o novo saldo.

Entrada e saída esperada:
const conta = new Conta(100);
console.log(conta.depositar(50)); // 150
console.log(conta.sacar(40));     // 110
conta.sacar(200);                 // Error: Saldo insuficiente.
console.log(conta.saldo);         // 110
*/

class Conta {
    // TODO: implemente constructor, getter, setter e métodos de instância.
}

// TODO: execute a sequência do exemplo usando try/catch.

