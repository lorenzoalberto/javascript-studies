/*
EXERCÍCIO: Editor de fila com splice

Partindo da fila abaixo e usando somente `splice` para alterá-la:
1. remova "Beto";
2. insira "Davi" entre "Ana" e "Caio";
3. substitua "Eva" por "Elisa".

Saída esperada: [ 'Ana', 'Davi', 'Caio', 'Elisa' ]
*/

const fila = ["Ana", "Beto", "Caio", "Eva"];

fila.splice(1, 1);
fila.splice(1, 0, "Davi");
fila.splice(3, 1, "Elisa");
console.log(fila);
