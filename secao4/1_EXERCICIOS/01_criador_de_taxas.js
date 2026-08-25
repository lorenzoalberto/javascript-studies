/*
EXERCÍCIO: Criador de taxas

Crie `adicionarTaxa(porcentagem)`, que retorna outra função. A função retornada
recebe um preço e devolve o valor com a taxa acrescentada.

Entradas e saídas:
const adicionarIcms = adicionarTaxa(18)
adicionarIcms(100) -> 118
adicionarIcms(250) -> 295
*/

function adicionarTaxa(porcentagem) {
  function preco(taxa) {
    return taxa + (taxa * porcentagem) / 100;
  }

  return preco;
}

const adicionarIcms = adicionarTaxa(18);
console.log(adicionarIcms(100));
console.log(adicionarIcms(250));
