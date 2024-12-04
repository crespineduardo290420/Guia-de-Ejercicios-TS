/** Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
•	Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
•	Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
•	Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
•	Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
•	Define un objeto de la clase Cuenta y llama sus métodos.
*/
var Cuenta = /** @class */ (function () {
    // Constructor que recibe los parámetros del nombre, cantidad, tipo de cuenta y número de cuenta
    function Cuenta(nombre, cantidad, tipoDeCuenta, numeroDeCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoDeCuenta = tipoDeCuenta;
        this.numeroDeCuenta = numeroDeCuenta;
    }
    // Método para depositar dinero
    Cuenta.prototype.depositar = function (monto) {
        if (monto < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00.');
        }
        else {
            this.cantidad += monto;
            console.log("Se ha depositado correctamente $".concat(monto, ". Nuevo saldo: $").concat(this.cantidad));
        }
    };
    // Método para retirar dinero
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5) {
            console.log('No se puede retirar menos de $5.00.');
        }
        else if (this.cantidad <= 0) {
            console.log('No hay dinero suficiente en la cuenta.');
        }
        else if (this.cantidad < valor) {
            console.log('Saldo insuficiente para realizar el retiro.');
        }
        else {
            this.cantidad -= valor;
            console.log("Se ha retirado $".concat(valor, ". Saldo restante: $").concat(this.cantidad));
        }
    };
    // Método para mostrar los datos de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipoDeCuenta));
        console.log("N\u00FAmero de cuenta: ".concat(this.numeroDeCuenta));
    };
    return Cuenta;
}());
// Definir un objeto de la clase Cuenta
var cuenta1 = new Cuenta('Juan Pérez', 100, 'Ahorros', '1234567890');
// Mostrar los datos de la cuenta
cuenta1.mostrarDatos();
// Realizar un depósito
cuenta1.depositar(50); // Depósito válido
cuenta1.depositar(4); // Depósito inválido (menos de $5)
// Realizar un retiro
cuenta1.retirar(30); // Retiro válido
cuenta1.retirar(3); // Retiro inválido (menos de $5)
cuenta1.retirar(200); // Retiro inválido (saldo insuficiente)
cuenta1.retirar(0); // Retiro inválido (menos de $5)
