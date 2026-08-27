/*
EXERCÍCIO: Fábrica estática de alunos

Crie a classe `Aluno` com nome e duas notas. Use getters e setters para garantir
que cada nota seja um número finito entre 0 e 10. Para valores inválidos, lance
"Nota inválida.".

Implemente também:
- getter de instância `media`, que calcula a média das notas;
- método de instância `situacao()`, que retorna "Aprovado" para média maior ou
  igual a 7 e "Reprovado" nos demais casos;
- método estático `criarDeObjeto(dados)`, que recebe um objeto com `nome`,
  `nota1` e `nota2` e devolve uma nova instância de `Aluno`.

Entrada e saída esperada:
const aluno = Aluno.criarDeObjeto({
    nome: "Lucas",
    nota1: 8,
    nota2: 6,
});

console.log(aluno instanceof Aluno); // true
console.log(aluno.media);            // 7
console.log(aluno.situacao());       // Aprovado
*/

class Aluno {
    // TODO: implemente constructor, getters, setters e métodos.
}

// TODO: crie o aluno através do método estático e execute os testes.

