/*
EXERCÍCIO: Relatório com for...in e for...of

Use `for...of` para percorrer os alunos. Dentro dele, use `for...in` para
percorrer as notas de cada aluno, calcular a média e exibir o resultado.

Saída esperada:
Ana: 8.00
Bruno: 6.00
*/

const alunos = [
  { nome: "Ana", notas: { prova1: 7, prova2: 9 } },
  { nome: "Bruno", notas: { prova1: 5, prova2: 7 } },
];

for (let aluno of alunos) {
  for (let i in aluno) {
    if (typeof aluno[i] === "object") {
      let arrayNotas = Object.values(aluno[i]);

      let soma = 0;
      for (let nota of arrayNotas) {
        soma += nota;
      }
      let media = soma / arrayNotas.length;

      console.log(`${aluno["nome"]}: ${media.toFixed(2)}`);
    }
  }
}
