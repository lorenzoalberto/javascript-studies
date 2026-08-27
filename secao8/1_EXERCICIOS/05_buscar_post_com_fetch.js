/*
EXERCÍCIO: Buscar um post com Fetch

Crie a função async `buscarPost(id)`. Faça um GET em:
https://jsonplaceholder.typicode.com/posts/ID

Regras:
- verifique `response.ok` antes de converter o corpo;
- em erro HTTP, lance `Error("Erro HTTP: STATUS")`;
- converta a resposta com `response.json()`;
- retorne somente um objeto com `id`, `titulo` e `conteudo`, traduzindo os
  campos `title` e `body` da API;
- trate o erro ao chamar a função, fora de `buscarPost`.

Entrada: buscarPost(1)
Saída esperada:
{
  id: 1,
  titulo: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  conteudo: 'quia et suscipit ...'
}

Teste também um ID inexistente, como 999999.
*/

async function buscarPost(id) {
    // TODO: faça a requisição, valide e retorne os campos solicitados.
}

// TODO: chame a função e trate sucesso e erro.

