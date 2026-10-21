
"use strict";

let opcion;

// El menú se repite mientras el usuario no elija salir.
while (true) {
    opcion = prompt(
        "MENÚ PRINCIPAL\n\n" +
        "1 - Tabla de multiplicar\n" +
        "2 - Sumar números\n" +
        "3 - Mostrar números impares del 1 al 20\n" +
        "4 - Cuenta atrás hasta 0\n" +
        "0 - Salir\n\n" +
        "Elige una opción:"
    );

    // Si el usuario pulsa Cancelar, salir del programa.
    if (opcion === null) {
        alert("Programa finalizado.");
        break;
    }

    switch (opcion.trim()) {

        case "1": {
            // FOR: recorrer los multiplicadores del 1 al 10.
            let entrada = prompt("Introduce un número para su tabla:");

            if (entrada === null || entrada.trim() === "") {
                alert("No has introducido ningún número.");
                break;
            }

            let numero = Number(entrada);

            if (!Number.isFinite(numero)) {
                alert("Introduce un número válido.");
                break;
            }

            let tabla = `Tabla de multiplicar del ${numero}:\n`;

            for (let i = 1; i <= 10; i++) {
                tabla += `${numero} x ${i} = ${numero * i}\n`;
            }

            alert(tabla);
            break;
        }

        case "2": {
            // WHILE(true): repetir hasta que la entrada esté vacía
            // o el usuario pulse Cancelar. BREAK termina el bucle.
            let suma = 0;
            let cantidad = 0;

            while (true) {
                let entrada = prompt(
                    "Introduce un número para sumar.\n" +
                    "Deja el campo vacío o pulsa Cancelar para terminar."
                );

                if (entrada === null || entrada.trim() === "") {
                    break;
                }

                let numero = Number(entrada);

                if (!Number.isFinite(numero)) {
                    alert("Entrada no válida. Introduce un número.");
                    continue;
                }

                suma += numero;
                cantidad++;
            }

            alert(
                `Cantidad de números sumados: ${cantidad}\n` +
                `Resultado de la suma: ${suma}`
            );
            break;
        }

        case "3": {
            // FOR: recorrer del 1 al 20.
            // CONTINUE: saltar los números pares.
            let impares = "Números impares del 1 al 20:\n";

            for (let i = 1; i <= 20; i++) {
                if (i % 2 === 0) {
                    continue;
                }

                impares += i + "\n";
            }

            alert(impares);
            break;
        }

        case "4": {
            // DO...WHILE: ejecutar al menos una vez y continuar
            // mientras el número sea mayor o igual que cero.
            let entrada = prompt("¿Desde qué número quieres contar atrás?");

            if (
                entrada === null ||
                entrada.trim() === "" ||
                !Number.isInteger(Number(entrada)) ||
                Number(entrada) < 0
            ) {
                alert("Introduce un número entero igual o mayor que 0.");
                break;
            }

            let contador = Number(entrada);
            let cuenta = "Cuenta atrás:\n";

            do {
                cuenta += contador + "\n";
                contador--;
            } while (contador >= 0);

            alert(cuenta);
            break;
        }

        case "0":
            alert("¡Hasta pronto!");
            break;

        default:
            // DEFAULT: gestionar opciones que no existen en el menú.
            alert("Opción desconocida. Elige 1, 2, 3, 4 o 0.");
            break;
    }

    // Salir del bucle principal si la opción fue 0.
    if (opcion.trim() === "0") {
        break;
    }
}

