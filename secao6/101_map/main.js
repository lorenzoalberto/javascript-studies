// Objeto Map()
const carrinho = new Map();

// Adicionando produtos ao carrinho
carrinho.set(101, 2); // 2 unidades do produto 101
carrinho.set(205, 1); // 1 unidade do produto 205

// Consultando a quantidade
console.log(carrinho.get(101)); // 2

// Verificando se um produto está no carrinho
console.log(carrinho.has(205)); // true

// Alterando a quantidade
carrinho.set(101, 3);

console.log(carrinho.get(101)); // 3

// Removendo um produto
carrinho.delete(205);
