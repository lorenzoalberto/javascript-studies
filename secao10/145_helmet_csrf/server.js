// Helmet e CSRF
import express from "express";
import helmet from "helmet";
import session from "express-session";

import usuariosRouter from "./routes/usuarios.routes.js";

const app = express();

// Middleware de segurança
app.use(helmet());

// Permite receber JSON
app.use(express.json());

// Sessão
app.use(
  session({
    secret: "uma-chave-secreta-bem-grande",
    resave: false,
    saveUninitialized: false,

    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // Em produção com HTTPS: true
    },
  }),
);

app.use("/usuarios", usuariosRouter);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
