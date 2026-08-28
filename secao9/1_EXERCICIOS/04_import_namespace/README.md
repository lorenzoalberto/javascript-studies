# 04 — Namespace com `import * as`

Em `conversoes.js`, crie named exports para:

- `metrosParaCentimetros(metros)`;
- `quilometrosParaMetros(quilometros)`;
- `celsiusParaFahrenheit(celsius)`;
- a constante `CENTIMETROS_POR_METRO`, com valor 100.

Em `main.js`, importe todo o módulo como o objeto `Conversoes`. Acesse tudo através desse namespace.

## Saída esperada

```text
2 m = 200 cm
3 km = 3000 m
20 °C = 68 °F
Centímetros por metro: 100
```

Desafio extra: use `Object.keys(Conversoes)` para observar os nomes exportados pelo módulo.
