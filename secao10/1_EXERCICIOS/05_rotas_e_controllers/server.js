import express from "express";
import livrosRouter from "./routes/livros.routes.js";

const app = express();

app.use(express.json());

// TODO: registre livrosRouter no caminho /livros.
// TODO: inicie o servidor na porta 3000.

