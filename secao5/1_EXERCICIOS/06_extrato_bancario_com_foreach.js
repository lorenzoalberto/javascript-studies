/*
EXERCÍCIO: Extrato bancário com forEach

Partindo do saldo inicial e das movimentações abaixo, use `forEach` para
percorrer o array e atualizar o saldo:

- movimentações do tipo "entrada" devem aumentar o saldo;
- movimentações do tipo "saida" devem diminuir o saldo;
- após cada movimentação, exiba o número da operação, sua descrição e o saldo
  atualizado.

Entrada:
saldo inicial = 1000

[
  { descricao: "Salário", tipo: "entrada", valor: 500 },
  { descricao: "Internet", tipo: "saida", valor: 120 },
  { descricao: "Mercado", tipo: "saida", valor: 80 },
  { descricao: "Freelance", tipo: "entrada", valor: 250 }
]

Saída esperada:
1. Salário: entrada de R$ 500.00 | Saldo: R$ 1500.00
2. Internet: saída de R$ 120.00 | Saldo: R$ 1380.00
3. Mercado: saída de R$ 80.00 | Saldo: R$ 1300.00
4. Freelance: entrada de R$ 250.00 | Saldo: R$ 1550.00
Saldo final: R$ 1550.00

Regras:
1. Use `forEach` e o índice fornecido pelo método.
2. Não use `for`, `for...of`, `map`, `filter` ou `reduce`.
3. Não altere os objetos do array original.
4. Exiba todos os valores monetários com duas casas decimais.

Desafio extra:
Durante o mesmo `forEach`, conte quantas entradas e saídas ocorreram e some o
valor total de cada tipo.

Saída extra esperada:
Entradas: 2 movimentações, total de R$ 750.00
Saídas: 2 movimentações, total de R$ 200.00
*/

let saldo = 1000;

const movimentacoes = [
  { descricao: "Salário", tipo: "entrada", valor: 500 },
  { descricao: "Internet", tipo: "saida", valor: 120 },
  { descricao: "Mercado", tipo: "saida", valor: 80 },
  { descricao: "Freelance", tipo: "entrada", valor: 250 },
];

// TODO: percorra as movimentações com forEach.
// TODO: atualize o saldo e exiba cada linha do extrato.
// TODO: exiba o saldo final.
// TODO (desafio extra): conte e some as movimentações de cada tipo.

