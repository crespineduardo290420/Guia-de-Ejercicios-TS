class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'centrado' | 'derecha' | 'izquierda';
  
    constructor(titulo: string, color: string, fuente: string, alineacion: 'centrado' | 'derecha' | 'izquierda') {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
      this.alineacion = alineacion;
    }
  
    // Método para obtener las propiedades del título, color y fuente
    obtenerPropiedades(): { titulo: string; color: string; fuente: string } {
      return {
        titulo: this.titulo,
        color: this.color,
        fuente: this.fuente,
      };
    }
  
    // Método para establecer cómo debe aparecer el título (centrado, derecha o izquierda)
    establecerAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
      this.alineacion = alineacion;
    }
  
    // Método para imprimir todas las propiedades
    imprimirPropiedades(): void {
      console.log('Propiedades de la Cabecera de la Página:');
      console.log(`Título: ${this.titulo}`);
      console.log(`Color: ${this.color}`);
      console.log(`Fuente: ${this.fuente}`);
      console.log(`Alineación: ${this.alineacion}`);
    }
  }
  
  // Ejemplo de uso
  const cabecera = new CabeceraPagina('Mi Página', 'azul', 'Arial', 'centrado');
  
  // Obtener las propiedades
  console.log(cabecera.obtenerPropiedades());
  
  // Cambiar la alineación
  cabecera.establecerAlineacion('derecha');
  
  // Imprimir todas las propiedades
  cabecera.imprimirPropiedades();
  