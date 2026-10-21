
"use strict";

// Pedir la nota al usuario
let entrada = prompt("Introduce una nota numérica entre 0 y 10:");

// Comprobar si el usuario ha pulsado Cancelar
if (entrada === null) {
    alert("Has cancelado la introducción de la nota.");
} else {
    let nota = Number(entrada);

    // Validar que la entrada no esté vacía y sea un número entre 0 y 10
    if (
        entrada.trim() === "" ||
        !Number.isFinite(nota) ||
        nota < 0 ||
        nota > 10
    ) {
        alert("Error: introduce un número válido entre 0 y 10.");
    } else {
        // Clasificar la nota mediante if / else if / else
        if (nota < 5) {
            alert("Suspenso");
        } else if (nota < 7) {
            alert("Aprobado");
        } else if (nota < 9) {
            alert("Notable");
        } else {
            alert("Sobresaliente");
        }

        // Reescritura de una comprobación con el operador ternario

        // Versión original:
        // if (nota >= 5) {
        //     alert("Aprobado o superior");
        // } else {
        //     alert("Suspenso");
        // }

        // Versión con operador ternario:
        let resultado = nota >= 5
            ? "Aprobado o superior"
            : "Suspenso";

        alert(resultado);
    }
}
