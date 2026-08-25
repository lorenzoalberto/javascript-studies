const usuario = {
  login() {
    console.log(`${this.nome} entrou no sistema.`);
  },

  logout() {
    console.log(`${this.nome} saiu do sistema.`);
  },
};

// Cria um objeto cujo prototype é "usuario"
const admin = Object.create(usuario);

admin.nome = "Carlos";
admin.cargo = "Administrador";

console.log(admin.nome); // Carlos
console.log(admin.cargo); // Administrador

admin.login(); // Carlos entrou no sistema.
admin.logout(); // Carlos saiu do sistema.
