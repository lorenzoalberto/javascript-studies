# 02 — Default export

Em `produto.js`, crie a classe `Produto` com nome e preço. O método `descrever()` deve retornar `NOME custa R$ VALOR`, com duas casas decimais. Exporte a classe como default export.

Em `main.js`, importe-a sem chaves, crie os produtos do exemplo e exiba suas descrições.

## Entrada

```js
new Produto("Mouse", 79.9)
new Produto("Monitor", 1200)
```

## Saída esperada

```text
Mouse custa R$ 79.90
Monitor custa R$ 1200.00
```

Desafio extra: escolha outro nome para a classe no momento da importação e confirme que o código continua funcionando.

