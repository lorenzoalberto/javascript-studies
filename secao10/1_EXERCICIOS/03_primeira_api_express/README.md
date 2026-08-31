# 03 — Primeira API com Express

Crie um servidor Express na porta 3000 com as rotas abaixo.

## Rotas e saídas esperadas

### `GET /`

Status `200`:

```json
{ "mensagem": "API de estudos online" }
```

### `GET /sobre`

Status `200`:

```json
{ "projeto": "JavaScript Studies", "tecnologia": "Express" }
```

### Qualquer rota inexistente

Status `404`:

```json
{ "mensagem": "Rota não encontrada" }
```

Ao iniciar, exiba `Servidor rodando em http://localhost:3000`.

Desafio extra: leia a porta de `process.env.PORT`, usando 3000 como valor padrão.

