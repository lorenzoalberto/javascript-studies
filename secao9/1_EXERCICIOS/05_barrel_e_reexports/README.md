# 05 — Barrel file e re-exports

Este exercício possui módulos separados para produtos e clientes. Complete os exports e crie `index.js` como arquivo centralizador (barrel).

Regras:

1. `produtos.js` exporta `calcularSubtotal(preco, quantidade)`.
2. `clientes.js` exporta `formatarCliente(nome)`.
3. `index.js` re-exporta os dois recursos.
4. `main.js` importa tudo somente de `./index.js`.

## Entrada

```js
formatarCliente("  maria silva  ")
calcularSubtotal(25, 4)
```

## Saída esperada

```text
Cliente: Maria silva
Subtotal: R$ 100.00
```

O objetivo é fazer o consumidor depender apenas do barrel, e não conhecer a organização interna dos módulos.

