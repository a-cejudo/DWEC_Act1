
"use strict";

// Pedir los datos al usuario
let nombre = prompt("¿Cómo te llamas?");
let ciudad = prompt("¿En qué ciudad vives?");
let anioNacimiento = prompt("¿En qué año naciste?");

// Comprobar si el usuario ha pulsado Cancelar
if (nombre === null || ciudad === null || anioNacimiento === null) {
    alert("Has cancelado la introducción de datos.");
} else {
    // Convertir el año introducido a número
    let anio = Number(anioNacimiento);
    let anioActual = new Date().getFullYear();

    // Validar el año de nacimiento
    if (
        anioNacimiento.trim() === "" ||
        !Number.isInteger(anio) ||
        anio < 1 ||
        anio > anioActual
    ) {
        alert("Por favor, introduce un año de nacimiento válido.");
    } else {
        let edad = anioActual - anio;

        // Crear el mensaje con backticks e interpolación
        let mensaje = `¡Bienvenido/a, ${nombre}! 
Vives en ${ciudad} y tienes aproximadamente ${edad} años.`;

        alert(mensaje);
    }
}
