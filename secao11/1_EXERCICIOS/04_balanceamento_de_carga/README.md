# 04 — Balanceamento de carga

Configure um grupo `upstream` chamado `api_backend` com três instâncias da mesma aplicação:

```text
localhost:3001
localhost:3002
localhost:3003
```

## Requisitos

- Use o algoritmo padrão round-robin.
- O servidor Nginx escuta a porta `8080`.
- Todas as requisições de `/api/` são encaminhadas ao upstream.
- Preserve o caminho `/api/...`.
- Encaminhe os headers `Host`, `X-Real-IP`, `X-Forwarded-For` e `X-Forwarded-Proto`.

## Entrada

Faça seis requisições consecutivas:

```text
GET http://localhost:8080/api/instancia
```

## Saída esperada

Com as três aplicações ativas, cada instância deve receber aproximadamente duas requisições.

Desafio extra: marque a terceira instância como `backup` e observe quando ela passa a receber tráfego.

