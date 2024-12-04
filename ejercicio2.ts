/**EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
•	Sumar
•	Restar
•	Multiplicar
•	Dividir
•	Potencia
•	Factorial
 */

class Calculadora {
    // Método para sumar dos números
    sumar(a: number, b: number): number {
      return a + b;
    }
  
    // Método para restar dos números
    restar(a: number, b: number): number {
      return a - b;
    }
  
    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
      return a * b;
    }
  
    // Método para dividir dos números
    dividir(a: number, b: number): number | string {
      if (b === 0) {
        return 'Error: No se puede dividir entre cero.';
      }
      return a / b;
    }
  
    // Método para calcular la potencia de un número
    potencia(base: number, exponente: number): number {
      return Math.pow(base, exponente);
    }
  
    // Método para calcular el factorial de un número
    factorial(n: number): number | string {
      if (n < 0) {
        return 'Error: El factorial no está definido para números negativos.';
      }
      let resultado = 1;
      for (let i = 1; i <= n; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }
  
  // Ejemplo de uso
  const calculadora = new Calculadora();
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
  