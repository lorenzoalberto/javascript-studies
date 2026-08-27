/*
EXERCÍCIO: Conversor com métodos estáticos

Crie a classe `ConversorTemperatura` sem constructor e com três métodos
estáticos:

- `celsiusParaFahrenheit(celsius)`;
- `fahrenheitParaCelsius(fahrenheit)`;
- `valorValido(valor)`, que retorna true apenas para números finitos.

Os métodos de conversão devem usar `valorValido`. Para valores inválidos,
devem lançar um Error com a mensagem "Temperatura inválida.".

Fórmulas:
- Fahrenheit = Celsius * 9 / 5 + 32
- Celsius = (Fahrenheit - 32) * 5 / 9

Entradas e saídas esperadas:
ConversorTemperatura.celsiusParaFahrenheit(20)  -> 68
ConversorTemperatura.fahrenheitParaCelsius(86) -> 30
ConversorTemperatura.valorValido("20")         -> false

Verificação:
const conversor = new ConversorTemperatura();
conversor.celsiusParaFahrenheit // undefined
*/

class ConversorTemperatura {
    // TODO: implemente os três métodos estáticos.
}

// TODO: execute todos os testes, incluindo um valor inválido.

