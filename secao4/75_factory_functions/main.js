// Funções fábrica (Factory Functions)
function criarUsuario(nome, idade) {
    return {
        nome,
        idade,

        apresentar() {
            console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
        },
    };
}

const lorenzo = criarUsuario("Lorenzo", 25);
const joao = criarUsuario("João", 30);

lorenzo.apresentar();
joao.apresentar();
