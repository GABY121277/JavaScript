function agregarComentario() {
    let texto = document.getElementById("comentario").value;

    if (texto.trim() === "") {
        alert("Escribe un comentario.");
        return;
    }

    // Crear el contenedor del comentario
    let nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");

    // Crear el párrafo que contiene el texto del comentario
    let textoComentario = document.createElement("p");
    textoComentario.textContent = texto;

    // Crear el botón de eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");

    // Función para eliminar el comentario cuando se presione el botón
    botonEliminar.onclick = function () {
        nuevoComentario.remove();
    };

    // Agregar el texto y el botón al comentario
    nuevoComentario.appendChild(textoComentario);
    nuevoComentario.appendChild(botonEliminar);

    // Agregar el comentario a la lista de comentarios
    document.getElementById("listaComentarios").appendChild(nuevoComentario);

    // Limpiar el área de texto
    document.getElementById("comentario").value = "";
}