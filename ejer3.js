
"use strict";

// Declaración de variables de diferentes tipos
let numero = 25;
let numeroGrande = 12345678901234567890n;
let texto = "Hola, mundo";
let booleano = true;
let valorNulo = null;
let valorIndefinido = undefined;
let simbolo = Symbol("identificador");
let persona = { nombre: "ChatGPT", edad: 0 };

// Crear una lista con los valores y sus tipos
let datos = [
    ["number", numero],
    ["bigint", numeroGrande],
    ["string", texto],
    ["boolean", booleano],
    ["null", valorNulo],
    ["undefined", valorIndefinido],
    ["symbol", simbolo],
    ["object", persona]
];

// Mostrar los resultados en forma de lista
document.write("<h2>Tipos de datos en JavaScript</h2>");
document.write("<ul>");

datos.forEach(function (dato) {
    document.write(
        "<li>" + dato[0] +
        " — Valor: " + String(dato[1]) +
        " — typeof: " + typeof dato[1] +
        "</li>"
    );
});

document.write("</ul>");

// typeof null devuelve "object" por una peculiaridad histórica de JavaScript.
// Es un comportamiento heredado que se mantiene por compatibilidad.
