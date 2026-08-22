// Funções geradoras
function* contador() {
    console.log("Comecei");

    yield 1;

    console.log("Continuei");

    yield 2;

    console.log("Terminei");
}

const numeros = contador();
console.log(numeros.next());
console.log(numeros.next());
console.log(numeros.next());

/* 
É possível usar .done e .value também.
*/
