/*
EXERCÍCIO: Buscar usuário com Axios

Use Axios para criar a função async `buscarUsuario(id)`. Faça um GET em:
https://jsonplaceholder.typicode.com/users/ID

Retorne um novo objeto com somente estas propriedades:
- `nome`, a partir de `name`;
- `email`;
- `cidade`, a partir de `address.city`;
- `empresa`, a partir de `company.name`.

Entrada: buscarUsuario(1)
Saída esperada:
{
  nome: 'Leanne Graham',
  email: 'Sincere@april.biz',
  cidade: 'Gwenborough',
  empresa: 'Romaguera-Crona'
}

No `catch`, se existir `erro.response`, exiba seu status. Caso contrário, exiba
a mensagem do erro. Teste também um ID inexistente.
*/

const axios = require("axios");

async function buscarUsuario(id) {
    // TODO: faça o GET e retorne apenas os campos solicitados.
}

// TODO: execute a busca dentro de try/catch e diferencie os tipos de erro.

