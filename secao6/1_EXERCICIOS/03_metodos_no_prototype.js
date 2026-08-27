/*
EXERCÍCIO: Métodos compartilhados pelo prototype

Crie a função construtora `Conta(nome, saldoInicial)`. As propriedades `nome` e
`saldo` devem pertencer a cada instância, mas os métodos devem ser definidos em
`Conta.prototype` para serem compartilhados.

Métodos:
- `depositar(valor)`: soma um valor positivo ao saldo e retorna o novo saldo;
- `resumo()`: retorna "NOME possui R$ SALDO", com duas casas decimais.

Entradas e saídas esperadas:
const contaAna = new Conta("Ana", 100);
const contaBeto = new Conta("Beto", 50);
console.log(contaAna.depositar(25)); // 125
console.log(contaAna.resumo());      // Ana possui R$ 125.00
console.log(contaBeto.resumo());     // Beto possui R$ 50.00

Verificação obrigatória:
contaAna.resumo === contaBeto.resumo // true
*/

function Conta(nome, saldoInicial) {
    // TODO: inicialize as propriedades da instância.
}

// TODO: defina os métodos em Conta.prototype.
// TODO: crie as contas e execute todos os testes.

