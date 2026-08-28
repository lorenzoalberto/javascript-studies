# 06 — Importação dinâmica

O módulo `relatorio.js` deve exportar a função `gerarRelatorio(vendas)`, que retorna um objeto com a quantidade de vendas e o total faturado.

Em `main.js`, crie a função async `executar(tipo)`. Importe `relatorio.js` dinamicamente com `await import()` somente quando `tipo` for `"completo"`. Para qualquer outro tipo, exiba `Relatório não solicitado.` sem importar o módulo.

## Entrada

```js
executar("completo")
```

Vendas fornecidas no arquivo:

```js
[100, 50, 25]
```

## Saída esperada

```text
Módulo carregado dinamicamente.
Quantidade: 3
Total: R$ 175.00
```

Desafio extra: execute também com `"resumido"` e confirme que o caminho alternativo é usado.

