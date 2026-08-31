# 03 — Proxy para múltiplos serviços

Use um único Nginx para encaminhar caminhos diferentes a duas aplicações.

## Serviços

- API de usuários: `http://localhost:3001`
- API de produtos: `http://localhost:3002`

## Regras

- Requisições iniciadas por `/usuarios/` vão para a API de usuários.
- Requisições iniciadas por `/produtos/` vão para a API de produtos.
- `/` responde diretamente pelo Nginx com status `200` e o texto `Gateway online`.
- Encaminhe os quatro headers praticados no exercício anterior para as duas APIs.

## Saída esperada

```text
GET /usuarios/10  -> http://localhost:3001/usuarios/10
GET /produtos/5   -> http://localhost:3002/produtos/5
GET /             -> Gateway online
```

Preste atenção à presença ou ausência da barra final em `proxy_pass`, pois ela pode alterar o caminho encaminhado.
