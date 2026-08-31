const fs = require("node:fs/promises");
const path = require("node:path");

const caminhoArquivo = path.join(__dirname, "tarefas.json");

async function salvarTarefas(caminho, tarefas) {
  // TODO: converta para JSON indentado e grave o arquivo.
}

async function carregarTarefas(caminho) {
  // TODO: leia o arquivo e trate especificamente o erro ENOENT.
}

async function adicionarTarefa(titulo) {
  // TODO: carregue, adicione e salve as tarefas.
}

async function concluirTarefa(id) {
  // TODO: encontre, atualize e salve a tarefa.
}

async function main() {
  // TODO: execute as operações do exemplo e exiba o resultado final.
}

main().catch(console.error);

