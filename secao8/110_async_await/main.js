// Async / Await
function buscarUsuario() {
  return new Promise((resolve, reject) => {
    const usuarioEncontrado = true;

    if (usuarioEncontrado) {
      resolve({
        id: 1,
        nome: "João",
      });
    } else {
      reject("Usuário não encontrado");
    }
  });
}

async function executar() {
  try {
    const usuario = await buscarUsuario();

    console.log("Usuário encontrado:");
    console.log(usuario);
  } catch (erro) {
    console.log("Erro:", erro);
  }
}

executar();
