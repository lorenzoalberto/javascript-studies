import crypto from "node:crypto";

export function gerarCsrfToken(req, res) {
  if (!req.session.csrfToken) {
    req.session.csrfToken = crypto.randomBytes(32).toString("hex");
  }

  return res.json({
    csrfToken: req.session.csrfToken,
  });
}

export function verificarCsrf(req, res, next) {
  const tokenRecebido = req.headers["x-csrf-token"];
  const tokenSessao = req.session.csrfToken;

  if (!tokenRecebido || !tokenSessao) {
    return res.status(403).json({
      mensagem: "Token CSRF não informado",
    });
  }

  if (tokenRecebido !== tokenSessao) {
    return res.status(403).json({
      mensagem: "Token CSRF inválido",
    });
  }

  next();
}
