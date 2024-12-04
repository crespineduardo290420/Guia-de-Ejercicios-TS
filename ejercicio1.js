var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente, alineacion) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = alineacion;
    }
    // Método para obtener las propiedades del título, color y fuente
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    };
    // Método para establecer cómo debe aparecer el título (centrado, derecha o izquierda)
    CabeceraPagina.prototype.establecerAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Método para imprimir todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log('Propiedades de la Cabecera de la Página:');
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// Ejemplo de uso
var cabecera = new CabeceraPagina('Mi Página', 'azul', 'Arial', 'centrado');
// Obtener las propiedades
console.log(cabecera.obtenerPropiedades());
// Cambiar la alineación
cabecera.establecerAlineacion('derecha');
// Imprimir todas las propiedades
cabecera.imprimirPropiedades();
