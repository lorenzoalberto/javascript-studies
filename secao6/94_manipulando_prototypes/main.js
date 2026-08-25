// Manipulando Prototypes
const usuario = {
  nome: "Lorenzo",
  email: "lorenzo@email.com",

  fazerLogin() {
    console.log(`${this.nome} fez login.`);
  },
};

const administrador = {
  cargo: "Administrador",

  excluirUsuario(nomeUsuario) {
    console.log(`${nomeUsuario} foi excluído.`);
  },
};

// administrador -> usuario -> Object.prototype -> null
Object.setPrototypeOf(administrador, usuario);

// Propriedade do próprio administrador
console.log(administrador.cargo);
// Administrador

// Propriedade encontrada no prototype
console.log(administrador.nome);
// Lorenzo

// Método encontrado no prototype
administrador.fazerLogin();
// Lorenzo fez login.

// Método do próprio administrador
administrador.excluirUsuario("João");
// João foi excluído.
