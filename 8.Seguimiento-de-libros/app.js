function agregarComentario() {
    let textoComentario = document.getElementById("comentarioEntrada").value;
    if (textoComentario.trim() === "") return; // Evitar comentarios vacíos

    let comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    let fechaHora = new Date().toLocaleString(); // Fecha y hora actual

    comentarioDiv.innerHTML = `
        <p><strong>Publicado el:</strong> ${fechaHora}</p>
        <p>${textoComentario}</p>
        <button class="btn-eliminar" onclick="this.parentElement.remove()">Eliminar</button>
    `;

    document.getElementById("listaComentarios").appendChild(comentarioDiv);
    document.getElementById("comentarioEntrada").value = ""; 
}

