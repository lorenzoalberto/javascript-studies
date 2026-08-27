/*
EXERCÍCIO FINAL: Operações com posts usando Axios

Crie três funções async para trabalhar com a API JSONPlaceholder:

1. `criarPost(dados)`
   POST https://jsonplaceholder.typicode.com/posts
   Envia `dados` e retorna `response.data`.

2. `atualizarTitulo(id, titulo)`
   PATCH https://jsonplaceholder.typicode.com/posts/ID
   Envia `{ title: titulo }` e retorna `response.data`.

3. `removerPost(id)`
   DELETE https://jsonplaceholder.typicode.com/posts/ID
   Retorna true quando o status estiver entre 200 e 299.

Na função async `executar`, realize as operações em sequência usando `await` e
um único `try/catch`.

Entrada para criação:
{
  title: "Estudando requisições",
  body: "Praticando Axios com async/await.",
  userId: 1
}

Resultados importantes:
- o post criado pela API simulada recebe `id: 101`;
- a atualização retorna o novo título;
- a remoção retorna true.

Observação:
JSONPlaceholder simula as escritas. As respostas indicam sucesso, mas os dados
não ficam permanentemente armazenados no servidor.

Desafio extra:
Crie uma instância com `axios.create`, configure `baseURL` como
"https://jsonplaceholder.typicode.com" e use apenas caminhos relativos nas
três funções.
*/

const axios = require("axios");

async function criarPost(dados) {
    // TODO: envie o POST e retorne os dados da resposta.
}

async function atualizarTitulo(id, titulo) {
    // TODO: envie o PATCH e retorne os dados da resposta.
}

async function removerPost(id) {
    // TODO: envie o DELETE e retorne o resultado solicitado.
}

async function executar() {
    // TODO: execute as três operações em sequência e trate possíveis erros.
}

// TODO: execute a função principal.

