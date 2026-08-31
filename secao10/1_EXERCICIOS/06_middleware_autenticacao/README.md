# 06 — Middleware de autenticação

Crie uma API de anotações em que consultas sejam públicas, mas alterações exijam autenticação.

## Middleware

Implemente `verificarAutenticacao(req, res, next)`:

- leia o header `authorization`;
- sem token, responda status `401` e `{ "mensagem": "Token não informado" }`;
- token diferente de `Bearer js-123`, responda status `401` e `{ "mensagem": "Token inválido" }`;
- token válido, atribua `{ id: 1, nome: "Estudante" }` a `req.usuario` e chame `next()`.

## Rotas

- `GET /anotacoes`: pública.
- `POST /anotacoes`: protegida.
- `DELETE /anotacoes/:id`: protegida.

## Entrada para criação

Header: `Authorization: Bearer js-123`

```json
{ "texto": "Revisar middlewares" }
```

## Saída esperada

Status `201`:

```json
{
  "mensagem": "Anotação criada",
  "criadoPor": { "id": 1, "nome": "Estudante" },
  "anotacao": { "id": 2, "texto": "Revisar middlewares" }
}
```

Desafio extra: crie um middleware global que exiba método, URL e horário de cada requisição.

