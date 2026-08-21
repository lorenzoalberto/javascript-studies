function processarUsuario(nome, callback) {
    console.log(`Processando usuário: ${nome}`);

    callback(nome);
}

function finalizar(nome) {
    console.log(`Usuário ${nome} processado com sucesso!`);
}

processarUsuario("Lorenzo", finalizar);
