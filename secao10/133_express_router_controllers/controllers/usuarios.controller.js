const usuarios = [
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Carlos", ativo: false },
  { id: 3, nome: "Maria", ativo: true },
];

export function listarUsuarios(req, res) {
  const { ativo } = req.query;

  if (ativo === undefined) {
    return res.json(usuarios);
  }

  const resultado = usuarios.filter(
    (usuario) => usuario.ativo === (ativo === "true"),
  );

  return res.json(resultado);
}

export function buscarUsuario(req, res) {
  const { id } = req.params;

  const usuario = usuarios.find((usuario) => usuario.id === Number(id));

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  return res.json(usuario);
}

export function criarUsuario(req, res) {
  const { nome, ativo } = req.body;

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    ativo,
  };

  usuarios.push(novoUsuario);

  return res.status(201).json(novoUsuario);
}

export function atualizarUsuario(req, res) {
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

  return res.json(usuario);
}
