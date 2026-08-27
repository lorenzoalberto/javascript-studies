// Fetch API e Axios (JSON)
const axios = require("axios");

// Buscando informações
async function buscarUsuario(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    const usuario = response.data;

    console.log("Nome:", usuario.name);
    console.log("E-mail:", usuario.email);
    console.log("Telefone:", usuario.phone);
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro);
  }
}

buscarUsuario(1);

// Enviando dados
async function criarPost() {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "Aprendendo Axios",
        body: "Conteúdo do meu primeiro POST com Axios.",
        userId: 1,
      },
    );

    console.log("Post criado:", response.data);
  } catch (erro) {
    console.error("Erro ao criar post:", erro);
  }
}

criarPost();
