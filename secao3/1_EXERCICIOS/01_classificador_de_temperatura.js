/*
EXERCÍCIO: Classificador de temperatura

Exiba "Frio" se a temperatura for menor que 15, "Agradável" de 15 até 25
(inclusive) e "Quente" acima de 25. Se o valor não for um número finito,
exiba "Temperatura inválida".

Casos para testar:
10 -> Frio
22 -> Agradável
31 -> Quente
NaN -> Temperatura inválida
*/

const temperatura = NaN;
const temperaturaValida = Number.isFinite(temperatura);

if (!temperaturaValida) console.log("Temperatura inválida");
else {
  if (temperatura >= 15 && temperatura <= 25) console.log("Agradável");
  else if (temperatura > 25) console.log("Quente");
  else console.log("Frio");
}
