/*
EXERCÍCIO FINAL: Sistema de reservas

Crie a classe `Reserva` combinando getters, setters, métodos de instância e
métodos estáticos.

Cada reserva possui:
- `hospede`: string não vazia;
- `diarias`: número inteiro maior que zero;
- `valorDiaria`: número finito maior que zero.

Use propriedades internas com `_` e valide as atribuições por setters. Dados
inválidos devem lançar um Error com a mensagem "Dados da reserva inválidos.".

Métodos de instância:
- getter `total`, que retorna diárias vezes valor da diária;
- `resumo()`, que retorna
  "HÓSPEDE: N diária(s), total R$ VALOR", com duas casas decimais.

Métodos estáticos:
- `aplicarDesconto(reserva, porcentagem)`: diminui o valor da diária da reserva
  e retorna a própria reserva;
- `maisCara(reservaA, reservaB)`: retorna a reserva com maior total;
- `totalDasReservas(reservas)`: recebe um array e soma os totais.

Entrada de exemplo:
const reservaAna = new Reserva("Ana", 3, 200);
const reservaBeto = new Reserva("Beto", 2, 350);

Saída esperada:
reservaAna.resumo()
// Ana: 3 diária(s), total R$ 600.00

Reserva.maisCara(reservaAna, reservaBeto).hospede
// Beto

Reserva.aplicarDesconto(reservaBeto, 10);
reservaBeto.total
// 630

Reserva.totalDasReservas([reservaAna, reservaBeto])
// 1230

Desafio extra:
Faça os métodos estáticos validarem se os argumentos recebidos são realmente
instâncias de `Reserva`.
*/

class Reserva {
    // TODO: implemente constructor, getters, setters e métodos.
}

// TODO: crie as reservas e execute todos os casos do exemplo.
// TODO (desafio extra): valide as instâncias nos métodos estáticos.

