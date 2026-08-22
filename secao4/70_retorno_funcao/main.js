// Retorno da função
function criarDesconto(porcentagem) {
    function calcular(preco) {
        return preco - (preco * porcentagem) / 100;
    }

    return calcular;
}

const desconto10 = criarDesconto(10);
const desconto20 = criarDesconto(20);

console.log(desconto10(100)); // 90
console.log(desconto10(250)); // 225

console.log(desconto20(100)); // 80
console.log(desconto20(250)); // 200
