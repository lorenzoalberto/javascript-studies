import crypto from "node:crypto";

export function gerarCsrfToken(req, res) {
  // TODO: crie o token somente quando ele ainda não existir na sessão.
}

export function verificarCsrf(req, res, next) {
  // TODO: valide o token recebido no header contra o token da sessão.
}

