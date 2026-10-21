
"use strict";

// Playlist: [título, artista, duración en segundos, género]
const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
];

// Función para mostrar una canción con todos sus datos.
function mostrarCancion(cancion) {
    return `
        <ul>
            <li>Título: ${cancion[0]}</li>
            <li>Artista: ${cancion[1]}</li>
            <li>Duración: ${cancion[2]} segundos</li>
            <li>Género: ${cancion[3]}</li>
            ${cancion.length > 4
                ? `<li>Año: ${cancion[4]}</li>`
                : ""}
        </ul>
    `;
}

// Función para mostrar la playlist completa.
function mostrarPlaylist(lista) {
    return `
        <ol>
            ${lista.map(cancion => `
                <li>
                    ${cancion.map(dato => `<span>${dato} </span>`).join(" | ")}
                </li>
            `).join("")}
        </ol>
    `;
}

// ==================================================
// PARTE 1: PUSH Y POP
// ==================================================

// 1. Añadir dos canciones al final.
playlist.push(
    ["Billie Jean", "Michael Jackson", 294, "Pop"],
    ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"]
);

// 2. Eliminar la última canción y guardarla.
const cancionEliminadaPop = playlist.pop();

// 3. Añadir el año como quinto dato de la primera canción.
playlist[0].push(1975);

// 4. Mostrar los resultados.
document.write("<h2>Parte 1: push() y pop()</h2>");

document.write("<h3>Título de la canción eliminada</h3>");
document.write(`<p>${cancionEliminadaPop[0]}</p>`);

document.write("<h3>Playlist resultante</h3>");
document.write(mostrarPlaylist(playlist));

// ==================================================
// PARTE 2: SPLICE
// ==================================================

// 5. Insertar una canción en la posición 1.
// El 0 indica que no se elimina ninguna canción.
playlist.splice(
    1,
    0,
    ["Sweet Child O' Mine", "Guns N' Roses", 356, "Hard Rock"]
);

// 6. Eliminar la fila de la posición 2 y guardarla.
const cancionEliminadaSplice = playlist.splice(2, 1)[0];

// 7. Sustituir la canción de la posición 0.
playlist.splice(
    0,
    1,
    ["Yesterday", "The Beatles", 125, "Pop"]
);

// 8. Mostrar la canción eliminada y la playlist actualizada.
document.write("<hr>");
document.write("<h2>Parte 2: splice()</h2>");

document.write("<h3>Todos los datos de la canción eliminada</h3>");
document.write(mostrarCancion(cancionEliminadaSplice));

document.write("<h3>Playlist resultante</h3>");
document.write(mostrarPlaylist(playlist));

// ==================================================
// PARTE 3: SPREAD Y COPIAS
// ==================================================

document.write("<hr>");
document.write("<h2>Parte 3: spread y copias</h2>");

// 9. Crear una copia superficial con spread.
const copiaSuperficial = [...playlist];

// Modificar el título de la primera canción de la copia.
copiaSuperficial[0][0] = "Título modificado (copia superficial)";

document.write("<h3>9. Copia superficial con spread</h3>");
document.write("<p>Playlist original después de modificar la copia:</p>");
document.write(mostrarPlaylist(playlist));

document.write("<p>Copia superficial modificada:</p>");
document.write(mostrarPlaylist(copiaSuperficial));

// Explicación:
// [...playlist] crea un array exterior nuevo, pero las filas internas
// siguen siendo las mismas referencias. Por eso, al cambiar una canción
// en la copia superficial, también cambia esa canción en la original.

// 10. Crear una copia independiente de cada fila con map y spread.
const copiaIndependiente = playlist.map(cancion => [...cancion]);

// Modificar el título de la primera canción de la nueva copia.
copiaIndependiente[0][0] = "Título modificado (copia independiente)";

document.write("<h3>10. Copia independiente con map() y spread</h3>");

document.write("<p>Playlist original:</p>");
document.write(mostrarPlaylist(playlist));

document.write("<p>Copia independiente modificada:</p>");
document.write(mostrarPlaylist(copiaIndependiente));

// Cada fila se ha copiado con [...cancion].
// Por eso, modificar una fila interna de la copia no modifica la original.
