/*
EXERCÍCIO: Perfis com Object.create

Crie um objeto `usuarioBase` com os métodos:
- `apresentar()`: retorna "Meu nome é NOME.";
- `podeEditar()`: retorna false.

Use `Object.create` para criar `editor` a partir de `usuarioBase`. O editor deve
ter as propriedades próprias `nome` e `area`, além de sobrescrever
`podeEditar()` para retornar true.

Entradas e saídas esperadas:
editor.nome = "Marina";
editor.area = "Tecnologia";
console.log(editor.apresentar());                    // Meu nome é Marina.
console.log(editor.podeEditar());                    // true
console.log(Object.keys(editor));                    // [ 'nome', 'area', 'podeEditar' ]
console.log(Object.getPrototypeOf(editor) === usuarioBase); // true

Desafio extra:
Crie um `administrador` cujo prototype seja `editor` e adicione um método
próprio chamado `podeExcluir()`, que retorna true.
*/

const usuarioBase = {
    // TODO: implemente os dois métodos do objeto-base.
};

// TODO: crie e configure o editor.
// TODO: execute os testes.
// TODO (desafio extra): crie e teste o administrador.

