// import() retorna uma Promise.
// O módulo só é carregado quando esta linha for executada.

async function executar() {
  const modulo = await import("./math.js");

  console.log("Módulo carregado dinamicamente.");
  console.log(modulo.somar(7, 8));
}

executar();
