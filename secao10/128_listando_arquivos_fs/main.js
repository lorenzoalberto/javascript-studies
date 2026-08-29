// Listando arquivos com FS e Recursão mútua
const fs = require("node:fs/promises");
const path = require("node:path");

/**
 * Percorre recursivamente um diretório e exibe seus arquivos.
 */
async function listarArquivos(diretorio) {
  const itens = await fs.readdir(diretorio);

  for (const item of itens) {
    const caminhoCompleto = path.join(diretorio, item);
    const stats = await fs.stat(caminhoCompleto);

    // Ignora diretórios que não queremos percorrer
    if (stats.isDirectory() && (item === "node_modules" || item === ".git")) {
      continue;
    }

    // Se for um diretório, chama a função novamente
    if (stats.isDirectory()) {
      await listarArquivos(caminhoCompleto);
      continue;
    }

    // Se chegou aqui, é um arquivo
    console.log(caminhoCompleto);
  }
}

listarArquivos(__dirname).catch(console.error);
