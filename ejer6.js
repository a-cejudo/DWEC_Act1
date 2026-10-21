
"use strict";

// 1. Pedir dos números
let entrada1 = prompt("Introduce el primer número:");
let entrada2 = prompt("Introduce el segundo número:");

if (entrada1 === null || entrada2 === null) {
    alert("Operación cancelada por el usuario.");
} else if (entrada1.trim() === "" || entrada2.trim() === "") {
    alert("Debes introducir dos números.");
} else {
    let num1 = Number(entrada1);
    let num2 = Number(entrada2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        alert("Error: introduce números válidos.");
    } else {
        // 2. Operadores aritméticos
        alert(
            `Resultados de la calculadora:
Suma (+): ${num1 + num2}
Resta (-): ${num1 - num2}
Multiplicación (*): ${num1 * num2}
División (/): ${num2 !== 0 ? num1 / num2 : "No se puede dividir entre cero"}
Resto (%): ${num2 !== 0 ? num1 % num2 : "No definido al dividir entre cero"}
Potencia (**): ${num1 ** num2}`
        );

        // 3. Asignaciones compuestas
        let resultado = num1;
        resultado += num2; // Equivale a resultado = resultado + num2
        alert(`Después de += : ${resultado}`);

        resultado *= 2; // Equivale a resultado = resultado * 2
        alert(`Después de *= 2: ${resultado}`);
    }
}

// 4. Incremento y decremento
let counter = 5;

// Sufijo: devuelve el valor anterior y después incrementa la variable.
alert(counter++); // Muestra 5; counter pasa a valer 6.

// Prefijo: incrementa primero y devuelve el valor nuevo.
alert(++counter); // counter pasa a 7 y muestra 7.

// Decremento con sufijo: muestra el valor anterior y luego resta 1.
alert(counter--); // Muestra 7; counter pasa a valer 6.

// Decremento con prefijo: resta 1 primero y devuelve el nuevo valor.
alert(--counter); // counter pasa a 5 y muestra 5.

alert(`Valor final de counter: ${counter}`);
