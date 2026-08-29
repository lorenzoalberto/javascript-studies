// Escrevendo e lendo arquivos
const fs = require("node:fs/promises");
const path = require("node:path");

const caminhoArquivo = path.join(__dirname, "pessoas.json");

const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Eduardo", idade: 28 },
];

async function escreverArquivo(caminho, dados) {
  const json = JSON.stringify(dados, null, 2);

  await fs.writeFile(caminho, json, "utf8");
}

async function lerArquivo(caminho) {
  const conteudo = await fs.readFile(caminho, "utf8");

  return JSON.parse(conteudo);
}

async function main() {
  // Escreve os dados no arquivo
  await escreverArquivo(caminhoArquivo, pessoas);

  // Lê os dados do arquivo
  const pessoasSalvas = await lerArquivo(caminhoArquivo);

  console.log(pessoasSalvas);
}

main().catch(console.error);
