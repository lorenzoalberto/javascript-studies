let nome = "Lorenzo Alberto de Figueiredo Aragão";

console.log(`Seu nome tem ${nome.length} letras`);
console.log(`A segunda letra do seu nome é: ${nome[1]}`);
console.log(
    `Qual o primeiro índice da letra "A" no seu nome? É ${nome.indexOf("A")}`,
);
console.log(
    `Qual o último índice da letra "A" no seu nome? É ${nome.lastIndexOf("A")}`,
);
console.log(`As últimas 3 letras do seu nome são: ${nome.slice(-3)}`);
console.log(`As palavras do seu nome são: ${nome.split(" ")}`);
console.log(`Seu nome com letras maiúsculas: ${nome.toUpperCase()}`);
console.log(`Seu nome com letras maiúsculas: ${nome.toLowerCase()}`);
