export function verificarAutenticacao(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      mensagem: "Token não informado",
    });
  }

  if (token !== "123456") {
    return res.status(401).json({
      mensagem: "Token inválido",
    });
  }

  req.usuario = {
    id: 1,
    nome: "Administrador",
  };

  next();
}
