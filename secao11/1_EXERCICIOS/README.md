# Exercícios — Seção 11

Esta sequência pratica Nginx como proxy reverso. Faça os exercícios na ordem numérica, lendo o `README.md` e completando os comentários `TODO` do respectivo `nginx.conf`.

## Conteúdo

1. Proxy reverso básico
2. Encaminhamento de headers
3. Proxy para múltiplos serviços
4. Balanceamento de carga
5. Proxy para WebSocket
6. Gateway completo

Se o Nginx estiver instalado, valide uma configuração usando um caminho absoluto:

```bash
nginx -t -c "$(pwd)/nginx.conf"
```

Não é necessário possuir os servidores Node ativos para testar a sintaxe. Eles serão necessários apenas para testar as requisições de ponta a ponta.

