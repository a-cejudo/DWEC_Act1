
"use strict";

// 1. Pedir dos números
let entrada1 = prompt("Introduce el primer número:");
let entrada2 = prompt("Introduce el segundo número:");

if (entrada1 === null || entrada2 === null) {
    alert("Has cancelado la introducción de datos.");
} else if (entrada1.trim() === "" || entrada2.trim() === "") {
    alert("Debes introducir los dos números.");
} else {
    // Convertir los textos a números
    let numero1 = Number(entrada1);
    let numero2 = Number(entrada2);

    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        alert("Debes introducir valores numéricos válidos.");
    } else {
        // Suma numérica
        alert(`Suma correcta: ${numero1 + numero2}`);

        // Concatenación de strings, sin convertir a números
        alert(`Sin conversión: ${entrada1 + entrada2}`);
    }
}

// 2. Valores que vamos a convertir
let valores = [
    { etiqueta: '"123"', valor: "123" },
    { etiqueta: '" 45 "', valor: " 45 " },
    { etiqueta: '"abc"', valor: "abc" },
    { etiqueta: '""', valor: "" },
    { etiqueta: '"0"', valor: "0" },
    { etiqueta: "0", valor: 0 },
    { etiqueta: "null", valor: null },
    { etiqueta: "undefined", valor: undefined },
    { etiqueta: "true", valor: true }
];

// Mostrar los valores originales y sus conversiones
let html = `
    <h2>Tabla de conversiones en JavaScript</h2>
    <table border="1" cellpadding="6" cellspacing="0">
        <thead>
            <tr>
                <th>Valor original</th>
                <th>Number()</th>
                <th>String()</th>
                <th>Boolean()</th>
            </tr>
        </thead>
        <tbody>
`;

valores.forEach(function (elemento) {
    let valor = elemento.valor;
    let numero = Number(valor);
    let texto = String(valor);
    let booleano = Boolean(valor);

    html += `
        <tr>
            <td>${elemento.etiqueta}</td>
            <td>${Number.isNaN(numero) ? "NaN" : numero}</td>
            <td>${texto === "" ? '"" (cadena vacía)' : texto}</td>
            <td>${booleano}</td>
        </tr>
    `;
});

html += `
        </tbody>
    </table>
`;

// Insertar la tabla en la página
document.body.insertAdjacentHTML("beforeend", html);
