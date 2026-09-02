/*
EXERCÍCIO: Agrupamento com reduce

Use `reduce` para agrupar os nomes por função. O acumulador deve ser um objeto
e cada função deve apontar para um array de nomes.

Saída esperada:
{ dev: [ 'Ana', 'Caio' ], design: [ 'Bia', 'Davi' ] }
*/

const equipe = [
  { nome: "Ana", funcao: "dev" },
  { nome: "Bia", funcao: "design" },
  { nome: "Caio", funcao: "dev" },
  { nome: "Davi", funcao: "design" },
];

const nomesPorFuncao = equipe.reduce((acumulador, pessoa) => {
  const funcao = pessoa.funcao;

  if (!acumulador[funcao]) {
    acumulador[funcao] = [];
  }

  acumulador[funcao].push(pessoa.nome);

  return acumulador;
}, {});

console.log(nomesPorFuncao);
