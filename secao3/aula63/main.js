function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x e y precisam ser números.");
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma("1", 2));
} catch (error) {
    console.log(error.message);
}

/* 
ANão é necessário colocar try/catch em toda função. O ideal é que uma função utilize throw quando detectar uma situação
inválida que impeça sua execução normal, deixando o erro subir pela cadeia de chamadas até chegar a uma camada que
realmente saiba como tratá-lo. O try/catch deve ser utilizado justamente nessa camada, onde é possível tomar alguma
decisão diante do erro, como retornar uma resposta HTTP adequada, exibir uma mensagem ao usuário, registrar um log ou
executar alguma ação alternativa. Se colocarmos try/catch em todas as funções apenas para capturar e relançar o mesmo
erro, criamos código repetitivo sem benefício real. Em uma API Node.js/Express, por exemplo, uma função de serviço pode
detectar que um usuário não existe e lançar um erro com throw new Error(...); ela não precisa saber nada sobre HTTP.
Esse erro pode subir até o controller ou até um middleware global de tratamento de erros, que então decide qual 
esposta HTTP enviar ao cliente. Assim, cada camada mantém sua responsabilidade: quem detecta o problema lança o erro
(throw), e quem sabe como responder ao problema trata o erro (try/catch).
*/
