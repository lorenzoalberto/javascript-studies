/*
EXERCÍCIO: Contador privado com closure

Crie `criarContador(inicial)`. Ela deve retornar um objeto com os métodos
`incrementar`, `decrementar` e `valor`. O número atual não pode ser acessado
diretamente fora da função.

Exemplo:
const contador = criarContador(10)
contador.incrementar() -> 11
contador.incrementar() -> 12
contador.decrementar() -> 11
contador.valor() -> 11
*/

function criarContador(inicial) {
  return {
    incrementar() {
      // inicial++;
      // return inicial; isso pode ser trocado pelo abaixo
      return ++inicial;
    },
    decrementar() {
      --inicial;
    },
    valor() {
      return inicial;
    },
  };
}

const contador = criarContador(10);
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.decrementar());
console.log(contador.valor());
