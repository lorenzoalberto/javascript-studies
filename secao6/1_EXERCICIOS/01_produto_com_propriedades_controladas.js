/*
EXERCÍCIO: Produto com propriedades controladas

Crie o objeto `produto` e use `Object.defineProperties` para adicionar:

- `codigo`: valor 101, enumerável, mas não pode ser alterado nem removido;
- `nome`: valor "Teclado", enumerável e pode ser alterado;
- `custoInterno`: valor 80, pode ser alterado, mas não deve aparecer em
  Object.keys().

Testes e saídas esperadas:
console.log(Object.keys(produto)); // [ 'codigo', 'nome' ]
produto.nome = "Teclado mecânico";
produto.codigo = 999;
delete produto.codigo;
console.log(produto);
// { codigo: 101, nome: 'Teclado mecânico' }
console.log(produto.custoInterno); // 80

Observação: as tentativas de alterar ou remover `codigo` podem lançar erro caso
o arquivo seja executado em strict mode. O importante é que o valor permaneça.
*/

const produto = {};

// TODO: defina as três propriedades com os descritores adequados.
// TODO: execute os testes e confira os resultados.

