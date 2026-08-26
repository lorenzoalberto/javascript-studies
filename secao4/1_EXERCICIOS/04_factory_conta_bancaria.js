/*
EXERCÍCIO: Factory de conta bancária

Crie uma factory `criarConta(titular, saldoInicial)`. O objeto retornado deve
ter os métodos `depositar(valor)`, `sacar(valor)` e `consultarSaldo()`.
Não permita saque maior que o saldo; nesse caso, retorne "Saldo insuficiente".

Exemplo:
conta.depositar(50) -> 150
conta.sacar(30) -> 120
conta.sacar(200) -> Saldo insuficiente
conta.consultarSaldo() -> 120
*/

function criarConta(titular, saldoInicial) {
  let saldoAtual = saldoInicial;

  return {
    depositar(valor) {
      return (saldoAtual += valor);
    },

    sacar(valor) {
      if (valor > saldoAtual) {
        return "Saldo insuficiente";
      }

      return (saldoAtual -= valor);
    },

    consultarSaldo() {
      return saldoAtual;
    },
  };
}

const conta = criarConta("Lorenzo Alberto", 100);
console.log(conta.depositar(50));
console.log(conta.sacar(30));
console.log(conta.sacar(200));
console.log(conta.consultarSaldo());
