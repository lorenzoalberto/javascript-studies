/*
EXERCÍCIO: Validador de CPF

Crie a função `validarCpf(cpf)`, que recebe um CPF formatado ou apenas com
dígitos e retorna true ou false.

Etapas sugeridas:
1. remova todos os caracteres que não sejam números;
2. rejeite valores que não tenham exatamente 11 dígitos;
3. rejeite CPFs formados por onze dígitos iguais, como "111.111.111-11";
4. calcule o primeiro dígito verificador usando pesos de 10 até 2;
5. calcule o segundo dígito usando pesos de 11 até 2;
6. compare os dígitos calculados com os dois últimos dígitos recebidos.

Regra de cada dígito:
- multiplique os números pelos pesos e some os resultados;
- calcule `11 - (soma % 11)`;
- se o resultado for maior que 9, o dígito será 0.

Entradas e saídas esperadas:
validarCpf("705.484.450-52") -> true
validarCpf("70548445052")    -> true
validarCpf("705.484.450-53") -> false
validarCpf("111.111.111-11") -> false
validarCpf("123")            -> false
*/

function validarCpf(cpf) {
    // TODO: limpe, valide e calcule os dígitos verificadores.
}

const cpfsParaTestar = [
    "705.484.450-52",
    "70548445052",
    "705.484.450-53",
    "111.111.111-11",
    "123",
];

// TODO: percorra os casos e exiba o CPF junto do resultado.

