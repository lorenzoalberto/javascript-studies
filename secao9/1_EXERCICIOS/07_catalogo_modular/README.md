# 07 — Catálogo modular

Construa um pequeno catálogo combinando os formatos de ES Modules estudados.

## Responsabilidades

- `Produto.js`: default export da classe `Produto`, com `nome`, `preco` e método `resumo()`.
- `validacoes.js`: named exports `nomeValido(nome)` e `precoValido(preco)`.
- `formatadores.js`: named export `formatarMoeda(valor)`.
- `catalogo.js`: named exports `adicionarProduto`, `listarProdutos` e `calcularTotal`. O array interno do catálogo não deve ser exportado.
- `index.js`: re-exporta os recursos públicos. Re-exporte a classe default com um nome para que ela possa ser importada junto dos named exports.
- `main.js`: importa tudo somente de `index.js`.

Ao adicionar um produto inválido, lance um `Error` com a mensagem `Produto inválido.`. `listarProdutos()` deve retornar uma cópia do array.

## Entrada

```js
new Produto("Livro", 40)
new Produto("Caderno", 20)
new Produto("Caneta", 5)
```

## Saída esperada

```text
Livro — R$ 40.00
Caderno — R$ 20.00
Caneta — R$ 5.00
Total do catálogo: R$ 65.00
```

## Desafio extra

Crie `estatisticas.js` e carregue-o com `import()` somente quando houver produtos no catálogo. Ele deve calcular o preço médio, cuja saída para os dados acima é `R$ 21.67`.

