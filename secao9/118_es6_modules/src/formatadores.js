// Vários named exports
export function maiusculo(texto) {
  return texto.toUpperCase();
}

export function minusculo(texto) {
  return texto.toLowerCase();
}

export function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}
