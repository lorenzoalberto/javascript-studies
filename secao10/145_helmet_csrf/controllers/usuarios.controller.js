const usuarios = [
  {
    id: 1,
    nome: "Ana",
  },
  {
    id: 2,
    nome: "Carlos",
  },
];

export function listarUsuarios(req, res) {
  return res.json(usuarios);
}

export function criarUsuario(req, res) {
  const { nome } = req.body;

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
  };

  usuarios.push(novoUsuario);

  return res.status(201).json(novoUsuario);
}

export function atualizarUsuario(req, res) {
  const { id } = req.params;
  const { nome } = req.body;

  const usuario = usuarios.find((usuario) => usuario.id === Number(id));

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  usuario.nome = nome;

  return res.json(usuario);
}

export function excluirUsuario(req, res) {
  const { id } = req.params;

  const index = usuarios.findIndex((usuario) => usuario.id === Number(id));

  if (index === -1) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  usuarios.splice(index, 1);

  return res.status(204).send();
}
