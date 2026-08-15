const frutas = ["maçã", "banana", "uva"];

for (let fruta of frutas) {
    console.log(fruta);
}

/* 
Em JavaScript, o for...in percorre as chaves/propriedades de um objeto. Em um array, essas chaves correspondem aos
índices (0, 1, 2...). Já o for...of percorre diretamente os valores de estruturas iteráveis, como arrays e strings.
Para objetos, normalmente usamos for...in; para percorrer os valores de arrays, normalmente usamos for...of.
Lembrete: objetos não são iteráveis.
*/
