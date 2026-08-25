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

const tamanho = 8;

for (let i = 0; i < tamanho; i++) {
  let linha = "";
  for (let j = 0; j < tamanho; j++) {
    if ((i + j) % 2 === 0) linha += "#";
    else linha += " ";
  }

  console.log(linha);
}
