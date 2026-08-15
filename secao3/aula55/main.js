const frutas = ["maçã", "banana", "uva"];

for (let fruta in frutas) {
    console.log(frutas[fruta]);
}

/* 
Em um objeto, ele originalmente mostraria as chaves.
É possível ter a chave-valor desse modo:
for (let chave in pessoa) {
	console.log(chave, pessoa[chave]);
}
Isso considerando que pessoas é um objeto e "chave" é uma string, pois a verificação original para obter o valor de um
objeto é <objeto>['<string da chave>']
*/
