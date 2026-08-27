// Promises
const minhaPromise = new Promise((resolve, reject) => {
  const deuCerto = true;

  setTimeout(() => {
    if (deuCerto) {
      resolve("Deu certo!");
    } else {
      reject("Deu errado!");
    }
  }, 2000);
});

minhaPromise
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });

/*
Estrutura de uma promise:
const promessa = new Promise((resolve, reject) => {

    // daqui a 2 segundos...
    setTimeout(() => {

        // diga que a promessa foi cumprida
        resolve("Terminou!");

    }, 2000);

});

promessa.then((resultado) => {

    // quando a promessa for cumprida,
    // faça alguma coisa com o resultado
    console.log(resultado);

});

Promise
├── resolve() → sucesso → .then()
└── reject()  → erro    → .catch()
*/
