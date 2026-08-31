# 06 — Gateway completo

Combine os conceitos anteriores em um gateway para uma aplicação dividida em serviços.

## Arquitetura

- Duas instâncias da API: `localhost:3001` e `localhost:3002`.
- Serviço de autenticação: `localhost:4000`.
- WebSocket de notificações: `localhost:5000`.

## Requisitos

1. Crie um upstream `api_backend` para as duas instâncias da API.
2. Encaminhe `/api/` para o upstream, preservando o caminho.
3. Encaminhe `/auth/` para o serviço de autenticação.
4. Encaminhe `/notificacoes` para o WebSocket, configurando o upgrade.
5. Faça `/health` responder status `200` com `Gateway saudável` diretamente pelo Nginx.
6. Encaminhe `Host`, `X-Real-IP`, `X-Forwarded-For` e `X-Forwarded-Proto` a todos os serviços.
7. Limite o corpo das requisições a `2m`.
8. Configure timeout de conexão com os serviços em 5 segundos.

## Saída esperada

```text
GET  /health          -> resposta direta do Nginx
GET  /api/usuarios    -> uma das portas 3001 ou 3002
POST /auth/login      -> porta 4000
WS   /notificacoes    -> porta 5000 com upgrade de protocolo
```

Desafio extra: adicione uma página JSON personalizada para respostas `502 Bad Gateway`.
