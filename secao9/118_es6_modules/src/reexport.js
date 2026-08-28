// Re-exportando funções de outro módulo.
// Isso é útil para criar um arquivo centralizador ("barrel").

export { somar, subtrair, PI } from "./math.js";
export { maiusculo, minusculo, capitalizar } from "./formatadores.js";
