# 04 — API de produtos

Crie uma API Express que use `req.query`, `req.params` e `req.body`. Os dados podem permanecer apenas em memória.

## Dados iniciais

```js
[
  { id: 1, nome: "Teclado", preco: 150, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, ativo: true },
  { id: 3, nome: "Webcam", preco: 200, ativo: false }
]
```

## Rotas

- `GET /produtos`: lista todos. Aceita `?ativo=true` ou `?ativo=false`.
- `GET /produtos/:id`: busca pelo ID ou responde status `404`.
- `POST /produtos`: recebe `nome`, `preco` e `ativo`, cria o produto e responde status `201`.
- `PATCH /produtos/:id`: atualiza somente os campos recebidos ou responde status `404`.
- `DELETE /produtos/:id`: remove o produto e responde status `204`, ou `404` se não existir.

## Saídas esperadas importantes

Produto inexistente:

```json
{ "mensagem": "Produto não encontrado" }
```

Criação válida:

```json
{ "id": 4, "nome": "Monitor", "preco": 1200, "ativo": true }
```

Desafio extra: valide nome não vazio, preço positivo e `ativo` booleano. Responda status `400` em dados inválidos.

