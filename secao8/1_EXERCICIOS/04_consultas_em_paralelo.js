/*
EXERCÍCIO: Consultas assíncronas em paralelo

A função `consultar(nome, tempo)` deve retornar uma Promise que resolve com o
nome recebido após o tempo informado.

Na função async `executarConsultas`, inicie as três consultas abaixo juntas e
use `Promise.all` para aguardar todas elas:

consultar("Usuário", 300)
consultar("Pedidos", 200)
consultar("Endereço", 100)

Saída esperada após aproximadamente 300 ms:
[ 'Usuário', 'Pedidos', 'Endereço' ]

Observe que `Promise.all` preserva a ordem das Promises recebidas, não a ordem
em que elas terminam.

Desafio extra:
Meça o tempo total com `console.time()` e `console.timeEnd()` e confirme que as
consultas não demoraram a soma dos três tempos.
*/

function consultar(nome, tempo) {
    // TODO: retorne uma Promise que usa setTimeout.
}

async function executarConsultas() {
    // TODO: inicie as consultas juntas e aguarde todas com Promise.all.
}

// TODO: execute a função.

