# Exemplos de ES6 Modules

Projeto simples para estudar módulos JavaScript no Node.js.

## Executar

```bash
npm start
```

ou:

```bash
node src/main.js
```

Para testar o import dinâmico:

```bash
npm run dynamic
```

## Arquivos

- `math.js`: named exports
- `usuario.js`: default export
- `formatadores.js`: múltiplos exports
- `main.js`: imports normais e alias
- `import-tudo.js`: `import * as`
- `reexport.js`: re-export / barrel
- `usando-reexport.js`: uso do arquivo centralizador
- `dynamic-import.js`: `import()` dinâmico

O `"type": "module"` no `package.json` faz com que arquivos `.js`
sejam interpretados pelo Node.js como ES Modules.
