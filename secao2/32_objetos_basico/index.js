// Objetos (Básico)
function criaObjeto(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const arrayObjetos = [];

arrayObjetos.push(criaObjeto("João", "Silva", 23));
arrayObjetos.push(criaObjeto("Maria", "Souza", 30));
arrayObjetos.push(criaObjeto("Pedro", "Alberto", 19));

console.log(arrayObjetos);
