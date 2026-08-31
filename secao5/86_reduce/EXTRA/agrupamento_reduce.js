// Agrupamento com reduce
const funcionarios = [
  { nome: "Ana", funcao: "Desenvolvedor" },
  { nome: "Carlos", funcao: "Designer" },
  { nome: "João", funcao: "Desenvolvedor" },
  { nome: "Maria", funcao: "Gerente" },
  { nome: "Pedro", funcao: "Designer" },
];

const funcionariosPorFuncao = funcionarios.reduce((acumulador, funcionario) => {
  const funcao = funcionario.funcao;

  // Se a função ainda não existe no objeto, cria um array vazio
  if (!acumulador[funcao]) {
    acumulador[funcao] = [];
  }

  // Adiciona o nome do funcionário no array da sua função
  acumulador[funcao].push(funcionario.nome);

  return acumulador;
}, {});

console.log(funcionariosPorFuncao);
