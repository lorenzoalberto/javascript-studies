# 02 — Headers do proxy

Complete o proxy para que a aplicação Node.js saiba qual host, protocolo e endereço IP originaram a requisição.

## Requisitos

Dentro de `location /`, configure:

- `Host` com o host original;
- `X-Real-IP` com o endereço remoto;
- `X-Forwarded-For` preservando a cadeia de proxies;
- `X-Forwarded-Proto` com o protocolo usado pelo cliente.

## Entrada

```text
GET http://localhost:8080/perfil
Host: api.exemplo.local
```

## Saída esperada na aplicação

```text
host: api.exemplo.local
x-real-ip: endereço IP do cliente
x-forwarded-for: cadeia contendo o IP do cliente
x-forwarded-proto: http
```

Não escreva IPs ou protocolos fixos. Use as variáveis disponibilizadas pelo Nginx.

