// Express - Introdução
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato.");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
});
