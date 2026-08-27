// Fetch API (GET)
async function buscarUsuarios() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const usuarios = await response.json();

    console.log(usuarios);
  } catch (erro) {
    console.error("Erro ao buscar usuários:", erro);
  }
}

buscarUsuarios();
