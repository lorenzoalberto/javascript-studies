# 02 — Persistência de tarefas em JSON

Crie um pequeno sistema que salva e recupera tarefas no arquivo `tarefas.json`, usando `node:fs/promises` e `node:path`.

## Funções obrigatórias

- `salvarTarefas(caminho, tarefas)`: converte o array em JSON indentado e grava em UTF-8.
- `carregarTarefas(caminho)`: lê e converte o JSON em JavaScript. Se o arquivo não existir, retorna um array vazio.
- `adicionarTarefa(titulo)`: carrega as tarefas, cria uma nova e salva o resultado.
- `concluirTarefa(id)`: altera `concluida` para `true`. Se o ID não existir, lança `Error("Tarefa não encontrada.")`.

## Operações de exemplo

```js
await adicionarTarefa("Estudar Node.js");
await adicionarTarefa("Praticar Express");
await concluirTarefa(1);
```

## Saída esperada

```js
[
  { id: 1, titulo: "Estudar Node.js", concluida: true },
  { id: 2, titulo: "Praticar Express", concluida: false }
]
```

Desafio extra: implemente `removerTarefa(id)` e salve o array sem a tarefa removida.

