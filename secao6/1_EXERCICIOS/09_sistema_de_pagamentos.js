/*
EXERCÍCIO FINAL: Sistema de pagamentos

Combine classes, herança, polimorfismo, getters/setters e Map.

1. Crie a classe-base `Pagamento`:
   - o constructor recebe `valor` e o atribui através do setter;
   - o setter aceita somente números finitos maiores que zero e lança
     "Valor inválido." nos outros casos;
   - o getter devolve o valor;
   - `processar()` lança "Método processar não implementado.".

2. Crie as subclasses:
   - `PagamentoPix`: `processar()` retorna "Pix de R$ X processado.";
   - `PagamentoCartao`: recebe também `parcelas` e `processar()` retorna
     "Cartão de R$ X processado em N parcela(s).".

3. Armazene os pagamentos em um Map, usando um ID numérico como chave.

4. Percorra os valores do Map e chame `processar()` sem testar qual é a classe.

Entrada de exemplo:
pagamentos.set(1, new PagamentoPix(150));
pagamentos.set(2, new PagamentoCartao(300, 3));

Saída esperada:
Pix de R$ 150.00 processado.
Cartão de R$ 300.00 processado em 3 parcela(s).
Total processado: R$ 450.00
*/

class Pagamento {
    // TODO: implemente constructor, getter, setter e método-base.
}

class PagamentoPix extends Pagamento {
    // TODO: sobrescreva processar.
}

class PagamentoCartao extends Pagamento {
    // TODO: implemente constructor e sobrescreva processar.
}

const pagamentos = new Map();

// TODO: adicione os pagamentos do exemplo.
// TODO: processe-os de forma polimórfica e calcule o total.

