import express from "express";

const app = express();

const produtos = [
  { id: 1, nome: "Teclado", preco: 150, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, ativo: true },
  { id: 3, nome: "Webcam", preco: 200, ativo: false },
];

app.use(express.json());

// TODO: implemente GET /produtos com o filtro opcional da query.
// TODO: implemente GET /produtos/:id.
// TODO: implemente POST /produtos usando req.body.
// TODO: implemente PATCH /produtos/:id usando params e body.
// TODO: implemente DELETE /produtos/:id.
// TODO: inicie o servidor na porta 3000.

