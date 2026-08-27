// Funções geradoras
function* filaAtendimento() {
  yield "Cliente 1";
  yield "Cliente 2";
  yield "Cliente 3";
}

const fila = filaAtendimento();

console.log(fila.next());
// { value: "Cliente 1", done: false }

console.log(fila.next());
// { value: "Cliente 2", done: false }

console.log(fila.next());
// { value: "Cliente 3", done: false }

console.log(fila.next());
// { value: undefined, done: true }
