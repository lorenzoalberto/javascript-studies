# 01 — Relatório recursivo de arquivos

Implemente `listarArquivos(diretorio)` usando `node:fs/promises`, `node:path` e recursão.

## Regras

- Percorra todos os subdiretórios.
- Ignore diretórios chamados `node_modules` e `.git`.
- Retorne um array de objetos, em vez de exibir os caminhos dentro da função.
- Cada objeto deve conter `nome`, `caminho`, `extensao` e `tamanhoBytes`.
- Inclua somente arquivos, nunca diretórios.
- Ordene o resultado pelo caminho antes de exibi-lo.

## Entrada

```js
listarArquivos(__dirname)
```

## Saída esperada

A saída dependerá dos arquivos existentes, mas deve seguir este formato:

```js
[
  {
    nome: "README.md",
    caminho: "/caminho/README.md",
    extensao: ".md",
    tamanhoBytes: 850
  },
  {
    nome: "main.js",
    caminho: "/caminho/main.js",
    extensao: ".js",
    tamanhoBytes: 1200
  }
]
```

Desafio extra: receba uma extensão opcional e retorne somente os arquivos desse tipo.

