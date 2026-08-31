# 07 — Helmet, sessão e proteção CSRF

Proteja uma API de comentários usando Helmet, `express-session` e um token CSRF armazenado na sessão.

## Configuração do servidor

- Registre `helmet()`.
- Registre `express.json()`.
- Configure a sessão com `resave: false` e `saveUninitialized: false`.
- Configure o cookie com `httpOnly: true`, `sameSite: "lax"` e `secure: false` para o ambiente local.
- Registre o router em `/comentarios`.

## Middleware CSRF

- `gerarCsrfToken`: cria 32 bytes aleatórios em hexadecimal somente se a sessão ainda não tiver token; responde `{ csrfToken }`.
- `verificarCsrf`: compara o header `x-csrf-token` com o token da sessão.
- Token ausente: status `403` e `{ "mensagem": "Token CSRF não informado" }`.
- Token diferente: status `403` e `{ "mensagem": "Token CSRF inválido" }`.
- Token correto: chama `next()`.

## Rotas

- `GET /comentarios/csrf-token`: gera o token.
- `GET /comentarios`: consulta pública.
- `POST /comentarios`: protegida pelo token.
- `DELETE /comentarios/:id`: protegida pelo token.

## Fluxo e saída esperada

1. Obtenha o token e preserve o cookie de sessão.
2. Envie cookie e token no POST:

```json
{ "texto": "Segurança também faz parte da API" }
```

3. Receba status `201`:

```json
{ "id": 3, "texto": "Segurança também faz parte da API" }
```

Desafio extra: use uma variável de ambiente para o segredo da sessão e lance um erro ao iniciar quando ela não existir.

