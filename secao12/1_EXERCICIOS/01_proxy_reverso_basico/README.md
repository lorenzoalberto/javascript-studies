# 01 — Proxy reverso básico

Configure o Nginx para receber requisições HTTP e encaminhá-las para uma aplicação Node.js.

## Requisitos

- Escute a porta `8080`.
- Use `localhost` como `server_name`.
- Encaminhe todas as requisições de `/` para `http://localhost:3000`.
- Preserve o caminho e a query string originais.

## Entrada

```text
GET http://localhost:8080/usuarios?ativo=true
```

## Saída esperada

A aplicação da porta 3000 deve receber:

```text
GET /usuarios?ativo=true
```

Desafio extra: altere a porta externa para uma variável de ambiente ao executar o Nginx via container.

