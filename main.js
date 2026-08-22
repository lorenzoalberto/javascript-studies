const pessoa = {
    nome: "Lorenzo",

    testar: function () {
        console.log("1:", this.nome);

        const normal = function () {
            console.log("2:", this.nome);
        };

        const arrow = () => {
            console.log("3:", this.nome);
        };

        normal();
        arrow();
    },
};

pessoa.testar();
