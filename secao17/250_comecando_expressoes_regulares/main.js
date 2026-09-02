// Começando com expressões regulares
const cpf = "123.456.789-00";

const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

console.log(regex.test(cpf));
