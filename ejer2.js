
// Declaración de variables: una por línea.
"use strict";

let userName = "ChatGPT";
let age = "No aplicable";
let city = "No aplicable";

// Constante de valor fijo: nombre en mayúsculas.
const COLOR_FAVORITO = "#3498DB";

// Constante calculada durante la ejecución.
const loadTime = Date.now();

// Mostrar los datos mediante alert.
alert("Nombre: " + userName);
alert("Edad: " + age);
alert("Ciudad: " + city);
alert("Color favorito: " + COLOR_FAVORITO);
alert("Tiempo de carga (timestamp): " + loadTime);

// Intento de reasignación de una constante:
// COLOR_FAVORITO = "#FF0000";
// Error en consola: TypeError: Assignment to constant variable.
