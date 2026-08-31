import express from "express";
import helmet from "helmet";
import session from "express-session";
import comentariosRouter from "./routes/comentarios.routes.js";

const app = express();

// TODO: registre Helmet, JSON e sessão com cookies seguros para ambiente local.
// TODO: registre comentariosRouter no caminho /comentarios.
// TODO: inicie o servidor na porta 3000.

