// For in - Estrutura de repetição
const pessoa = {
  nome: "Lorenzo",
  idade: 25,
  profissao: "Desenvolvedor",
};

for (const chave in pessoa) {
  console.log(chave);
}

/*
O objetivo dele é ler índices.

for...in é muito usado em objetos.
Quando usado em array, conta seus índices.
*/
