// Reduce - Reduzindo o array
const compras = [
  { preco: 40, quantidade: 2 },
  { preco: 5, quantidade: 3 },
];

const totalQuantidadeValor = compras.reduce(
  (acumulador, compra) => {
    acumulador = {
      quantidade: acumulador.quantidade + compra.quantidade,
      valor: acumulador.valor + compra.preco * compra.quantidade,
    };

    return acumulador;
  },
  { quantidade: 0, valor: 0 },
);

console.log(totalQuantidadeValor);
