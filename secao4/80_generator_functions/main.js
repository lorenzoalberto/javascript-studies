// Funções geradoras
function* contador() {
    console.log("Comecei");

    yield 1;

    console.log("Continuei");

    yield 2;

    console.log("Terminei");
}

const numeros = contador();
numeros.next();
numeros.next();
numeros.next();
