import { Router } from "express";

import {
  listarUsuarios,
  buscarUsuario,
  criarUsuario,
  atualizarUsuario,
} from "../controllers/usuarios.controller.js";

import { verificarAutenticacao } from "../middlewares/verificarAutenticacao.js";

const router = Router();

router.get("/", listarUsuarios);

router.get("/:id", buscarUsuario);

router.post("/", verificarAutenticacao, criarUsuario);

router.patch("/:id", verificarAutenticacao, atualizarUsuario);

export default router;
