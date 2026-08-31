import { Router } from "express";

import {
  listarUsuarios,
  buscarUsuario,
  criarUsuario,
  atualizarUsuario,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/", listarUsuarios);

router.get("/:id", buscarUsuario);

router.post("/", criarUsuario);

router.patch("/:id", atualizarUsuario);

export default router;
controllers / usuarios.controller.js;
