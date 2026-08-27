/*
EXERCÍCIO: Encadeamento de Promises

As funções abaixo devem retornar Promises resolvidas. Implemente-as e faça um
encadeamento com `.then()` para executar estas etapas na ordem:

1. `buscarProduto()` resolve com `{ nome: "Notebook", preco: 3000 }`;
2. `aplicarDesconto(produto)` recebe o produto e resolve com um novo objeto que
   também possui `precoComDesconto`, equivalente a 90% do preço;
3. o último `.then()` exibe o resultado.

Saída esperada:
{ nome: 'Notebook', preco: 3000, precoComDesconto: 2700 }

Regras:
- retorne valores em cada `.then()` para manter o encadeamento;
- não altere o objeto original dentro de `aplicarDesconto`;
- finalize com `.catch()` para tratar possíveis erros.
*/

function buscarProduto() {
    // TODO: retorne uma Promise resolvida com o produto.
}

function aplicarDesconto(produto) {
    // TODO: retorne uma Promise resolvida com um novo objeto.
}

// TODO: encadeie as operações e trate possíveis erros.

