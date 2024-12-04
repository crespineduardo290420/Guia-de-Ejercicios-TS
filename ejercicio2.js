/**EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
•	Sumar
•	Restar
•	Multiplicar
•	Dividir
•	Potencia
•	Factorial
 */
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Método para sumar dos números
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Método para restar dos números
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Método para multiplicar dos números
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Método para dividir dos números
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            return 'Error: No se puede dividir entre cero.';
        }
        return a / b;
    };
    // Método para calcular la potencia de un número
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    // Método para calcular el factorial de un número
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            return 'Error: El factorial no está definido para números negativos.';
        }
        var resultado = 1;
        for (var i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
// Ejemplo de uso
var calculadora = new Calculadora();
//cambiar numeros para verificar
// Sumar
console.log(calculadora.sumar(2, 3));
// Restar
console.log(calculadora.restar(5, 3));
// Multiplicar
console.log(calculadora.multiplicar(5, 3));
// Dividir
console.log(calculadora.dividir(5, 0)); // Error: No se puede dividir entre cero.
console.log(calculadora.dividir(5, 2));
// Potencia
console.log(calculadora.potencia(2, 3));
// Factorial
console.log(calculadora.factorial(5));
console.log(calculadora.factorial(-5)); // Error: El factorial no está definido para números negativos.
