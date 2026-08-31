# 05 — Proxy para WebSocket

Uma aplicação na porta `3000` oferece HTTP normalmente e uma conexão WebSocket em `/socket`.

Configure o Nginx para encaminhar os dois tipos de tráfego.

## Requisitos

- `/` usa proxy HTTP comum para `http://localhost:3000`.
- `/socket` usa HTTP `1.1` no proxy.
- Encaminhe os headers `Upgrade` e `Connection` necessários para trocar o protocolo.
- Encaminhe também os headers de origem praticados anteriormente.

## Entrada

```text
ws://localhost:8080/socket
```

## Saída esperada

O handshake deve receber status `101 Switching Protocols`, e a conexão deve permanecer aberta.

Desafio extra: configure `proxy_read_timeout` para manter conexões ociosas por 60 segundos.

