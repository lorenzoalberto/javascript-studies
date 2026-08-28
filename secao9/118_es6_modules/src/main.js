// Importando named exports
import { somar, subtrair, PI } from "./math.js";

// Importando um default export
import Usuario from "./usuario.js";

// Importando um named export com alias
import { maiusculo as paraMaiusculo } from "./formatadores.js";

console.log("Soma:", somar(10, 5));
console.log("Subtração:", subtrair(10, 5));
console.log("PI:", PI);

const usuario = new Usuario("Lorenzo", 25);
console.log(usuario.apresentar());

console.log(paraMaiusculo("es6 modules"));
