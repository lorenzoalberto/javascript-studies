// Express - req.params, req.query e req.body
import express from "express";

const app = express();

app.use(express.json());

const usuarios = [
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Carlos", ativo: false },
  { id: 3, nome: "Maria", ativo: true },
];

// QUERY
// GET /usuarios?ativo=true
app.get("/usuarios", (req, res) => {
  const { ativo } = req.query;

  if (ativo === undefined) {
    return res.json(usuarios);
  }

  const resultado = usuarios.filter(
    (usuario) => usuario.ativo === (ativo === "true"),
  );

  res.json(resultado);
});

// PARAMS
// GET /usuarios/2
app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;

  const usuario = usuarios.find((usuario) => usuario.id === Number(id));

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  res.json(usuario);
});

// BODY
// POST /usuarios
app.post("/usuarios", (req, res) => {
  const { nome, ativo } = req.body;

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    ativo,
  };

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

// PARAMS + BODY
// PATCH /usuarios/2
app.patch("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nome, ativo } = req.body;

  const usuario = usuarios.find((usuario) => usuario.id === Number(id));

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  if (nome !== undefined) {
    usuario.nome = nome;
  }

  if (ativo !== undefined) {
    usuario.ativo = ativo;
  }

  res.json(usuario);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
