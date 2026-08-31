import { Router } from "express";

import {
  listarUsuarios,
  criarUsuario,
  atualizarUsuario,
  excluirUsuario,
} from "../controllers/usuarios.controller.js";

import {
  gerarCsrfToken,
  verificarCsrf,
} from "../middlewares/csrf.middleware.js";

const router = Router();

// Obter token CSRF
router.get("/csrf-token", gerarCsrfToken);

// Consulta
router.get("/", listarUsuarios);

// Alterações protegidas contra CSRF
router.post("/", verificarCsrf, criarUsuario);

router.patch("/:id", verificarCsrf, atualizarUsuario);

router.delete("/:id", verificarCsrf, excluirUsuario);

export default router;
