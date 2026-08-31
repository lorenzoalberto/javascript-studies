import express from "express";
import anotacoesRouter from "./routes/anotacoes.routes.js";

const app = express();

app.use(express.json());

// TODO (desafio extra): registre um middleware global de log.
// TODO: registre anotacoesRouter no caminho /anotacoes.
// TODO: inicie o servidor na porta 3000.

