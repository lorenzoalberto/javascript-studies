# 05 — Rotas e controllers

Organize uma API de livros em três partes:

- `server.js`: configura o Express e registra o router em `/livros`;
- `routes/livros.routes.js`: associa URLs e métodos HTTP aos controllers;
- `controllers/livros.controller.js`: guarda os dados e implementa as operações.

## Rotas obrigatórias

- `GET /livros`
- `GET /livros/:id`
- `POST /livros`
- `PATCH /livros/:id`
- `DELETE /livros/:id`

## Entrada para criação

```json
{ "titulo": "Clean Code", "autor": "Robert C. Martin" }
```

## Saída esperada

Status `201`:

```json
{ "id": 3, "titulo": "Clean Code", "autor": "Robert C. Martin" }
```

Buscas, atualizações e exclusões de IDs inexistentes devem responder status `404` com:

```json
{ "mensagem": "Livro não encontrado" }
```

