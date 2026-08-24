/*
EXERCÍCIO: Menu com switch

Converta o código de uma operação em uma descrição usando `switch`.

Entradas e saídas:
"C" -> Criar cadastro
"L" -> Listar cadastros
"A" -> Atualizar cadastro
"E" -> Excluir cadastro
qualquer outro valor -> Opção inválida

O código deve funcionar também quando a letra vier minúscula.
*/

const codigo = "l";
const codigoNormalizado = codigo.toUpperCase();

switch (codigoNormalizado) {
  case "C":
    console.log("Criar cadastro");
    break;

  case "L":
    console.log("Listar cadastros");
    break;

  case "A":
    console.log("Atualizar cadastro");
    break;

  case "E":
    console.log("Excluir cadastro");
    break;

  default:
    console.log("Opção inválida");
    break;
}
