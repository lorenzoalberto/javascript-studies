// Object.defineProperty() e Object.defineProperties()
const usuario = {};

Object.defineProperty(usuario, "nome", {
    value: "Lorenzo",
    writable: false, // pode alterar o valor?
    configurable: false, // pode deletar/reconfigurar a propriedade?
    enumerable: true, // aparece em Object.keys(), for...in etc.?
});

usuario.nome = "João"; // não altera
