/*
EXERCÍCIO: Tabuleiro com for

Use dois laços `for` para montar uma grade de 4 linhas e 4 colunas. Cada linha
deve alternar entre "# # " e " # #". Exiba uma linha por vez.

Saída esperada:
# # 
 # #
# # 
 # #

Desafio extra: altere uma única constante para gerar um tabuleiro 8 x 8.
*/

const tamanho = 4;

for (let i = 0; i < tamanho; i++) {
  console.log("#");
  console.log(" ");

  for (let j = 0; j < tamanho; j++) {
    console.log(" ");
    console.log("#");
  }
}
