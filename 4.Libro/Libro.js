// Arreglo
let librosLeidos = [];

agregarLibro("El extranjero");
agregarLibro("Noches Blancas");
agregarLibro("48 leyes del poder");

mostrarLibrosLeidos();

function agregarLibro(titulo) {//Función agregarLibro
    librosLeidos[librosLeidos.length] = titulo; 
}

function mostrarLibrosLeidos() {//Función mostarLibrosLeidos
    console.log("Libros leídos:");
    let i = 0; 
    while (i < librosLeidos.length) {
        console.log("- " + librosLeidos[i]);
        i = i + 1;
    }
}

