// Exercício com lógica de programação - 03
function fizzBuzz(numero) {
    const numeroValido =
        Number.isFinite(numero) && (numero >= 0) & (numero <= 100);

    if (numeroValido) {
        if (numero % 5 === 0 && numero % 3 === 0) return "FizzBuzz";
        if (numero % 3 === 0) return "Fizz";
        if (numero % 5 === 0) return "Buzz";
    }

    return numero;
}

console.log(fizzBuzz("a"));
