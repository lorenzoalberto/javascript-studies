// forEach
const usuarios = [
  { id: 1, nome: "Lorenzo", ativo: true },
  { id: 2, nome: "Carlos", ativo: false },
  { id: 3, nome: "Ana", ativo: true },
];

usuarios.forEach((usuario) => {
  if (usuario.ativo) {
    console.log(`${usuario.nome} está ativo`);
  }
});

/* 
O forEach fornece o índice automaticamente:
tarefas.forEach((tarefa, index) => {
  console.log(`${index + 1}. ${tarefa}`);
});
*/
