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
