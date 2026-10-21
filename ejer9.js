
"use strict";

// Formulario de alta simulado
let nombre = prompt("Introduce tu nombre:");
let apodo = prompt("Introduce tu apodo:");
let entradaEdad = prompt("Introduce tu edad:");

// Convertir los valores null de Cancelar en cadenas vacías
nombre = nombre ?? "";
apodo = apodo ?? "";

// 1. Usar || para elegir el primer valor disponible
// Si nombre y apodo están vacíos, se mostrará "Anónimo".
let nombreVisible = nombre.trim() || apodo.trim() || "Anónimo";

alert(`Nombre para mostrar: ${nombreVisible}`);

// 2. Usar && para comprobar los requisitos de acceso
let edad = entradaEdad === null || entradaEdad.trim() === ""
    ? NaN
    : Number(entradaEdad);

let tieneIdentidad = Boolean(nombre.trim() || apodo.trim());

let accesoPermitido =
    Number.isFinite(edad) &&
    edad >= 18 &&
    tieneIdentidad;

if (accesoPermitido) {
    alert("Acceso permitido");
} else {
    alert("Acceso denegado: necesitas tener 18 años o más y proporcionar un nombre o apodo.");
}

// 3. Diferencia entre || y ??
let altura = 0;

let alturaConOR = altura || 170;
let alturaConNullish = altura ?? 170;

alert(`Altura usando ||: ${alturaConOR}`);
alert(`Altura usando ??: ${alturaConNullish}`);

// Comentario:
// || utiliza el valor alternativo si el valor original es falsy,
// como 0, false o "".
// ?? solo utiliza el valor alternativo si el original es null
// o undefined. Por eso, con altura = 0, || devuelve 170,
// mientras que ?? conserva el valor 0.

// 4. Usar !! para convertir un valor en booleano
let valor = nombre.trim();
let esNombreValido = !!valor;

alert(`¿Se ha introducido un nombre? ${esNombreValido}`);
