// Función para crear un objeto libro
function crearLibro(titulo, autor, anio, estado) {
    return {
        titulo,
        autor,
        anio,
        estado,
        capitulos: [],
        describirLibro() {
            console.log(`Libro: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anio}, Estado: ${this.estado}`);
        },
        agregarCapitulo(capitulo) {
            this.capitulos.push(capitulo);
        },
        eliminarCapitulo() {
            this.capitulos.pop();
        }
    };
}

// Info
let miLibro = crearLibro("El extranjero","Albert Camus", 1942, "disponible");
miLibro.describirLibro();
miLibro.agregarCapitulo("Capítulo 1: Muerte de la madre de Meursault");
miLibro.agregarCapitulo("Capítulo 2: Encuentro con Marie y su relacion");

console.log("Capítulos:", miLibro.capitulos);
miLibro.eliminarCapitulo();
console.log("Capítulos después de eliminar:", miLibro.capitulos);
