/**Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
•	Crear un método constructor para recibir los datos.
•	Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
•	Crea un método para mostrar todos los datos personales (será el método abstracto).
•	Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
•	En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
•	La clase Empleado va heredar de la clase Persona.
•	Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
 */


// Clase abstracta Persona
abstract class Persona {
    // Atributos de la clase Persona
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;
  
    // Constructor que recibe los parámetros para inicializar los atributos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.telefono = telefono;
      this.edad = edad;
    }
  
    // Método para verificar si la persona es mayor de edad o no
    esMayorDeEdad(): void {
      if (this.edad >= 18) {
        console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
      }
    }
  
    // Método abstracto para mostrar los datos personales (debe ser implementado en las clases derivadas)
    abstract mostrarDatos(): void;
  }
  
  // Clase Empleado que hereda de Persona
  class Empleado extends Persona {
    // Atributo adicional para la clase Empleado
    sueldo: number;
  
    // Constructor que inicializa todos los atributos, incluyendo los heredados de Persona
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
      super(nombre, apellido, direccion, telefono, edad);  // Llamada al constructor de la clase Persona
      this.sueldo = sueldo;
    }
  
    // Método para cargar el sueldo
    cargarSueldo(sueldo: number): void {
      this.sueldo = sueldo;
    }
  
    // Método para imprimir el sueldo
    imprimirSueldo(): void {
      console.log(`El sueldo de ${this.nombre} ${this.apellido} es $${this.sueldo}`);
    }
  
    // Implementación del método abstracto para mostrar los datos personales
    mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre} ${this.apellido}`);
      console.log(`Dirección: ${this.direccion}`);
      console.log(`Teléfono: ${this.telefono}`);
      console.log(`Edad: ${this.edad}`);
      this.esMayorDeEdad();  // Verifica si es mayor de edad
    }
  }
  
  // Definir un objeto de la clase Empleado
  const empleado1 = new Empleado('Juan', 'Pérez', 'Av. Siempre Viva 123', '555-1234', 30, 5000);
  
  // Mostrar los datos del empleado y su sueldo
  empleado1.mostrarDatos();
  empleado1.imprimirSueldo();
  