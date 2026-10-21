// Versión con el objeto Date
"use strict";

// Obtener la fecha actual
const hoy = new Date();
const diaActual = hoy.getDate();
const mesActual = hoy.getMonth();
const anioActual = hoy.getFullYear();

// Si hoy es el día 31, no hay ningún día válido entre el 1 y el 30
if (diaActual > 30) {
    console.log("No se puede generar un evento válido: hoy es día 31.");
} else {
    // Generar un día aleatorio entre 1 y 30
    let diaEvento;

    do {
        diaEvento = Math.floor(Math.random() * 30) + 1;
    } while (diaEvento < diaActual);

    // Crear la fecha del evento
    const evento = new Date(anioActual, mesActual, diaEvento);

    // Calcular los días que faltan, evitando problemas con los cambios de hora
    const fechaHoyUTC = Date.UTC(anioActual, mesActual, diaActual);
    const fechaEventoUTC = Date.UTC(anioActual, mesActual, diaEvento);
    const diasFaltan = (fechaEventoUTC - fechaHoyUTC) / (1000 * 60 * 60 * 24);

    // Formatear las fechas en español
    const formatoFecha = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const hoyTexto = hoy.toLocaleDateString("es-ES", formatoFecha);
    const eventoTexto = evento.toLocaleDateString("es-ES", formatoFecha);

    // Mostrar el resultado usando template strings
    console.log(`La fecha actual es ${hoyTexto}`);
    console.log(`La fecha del evento: ${eventoTexto}`);
    console.log(`Días que faltan para el evento: ${diasFaltan} días`);
}

/////////////////////////////////////////////////////////////////////
//Versión con la API Temporal

"use strict";

// Comprobar que la API Temporal está disponible
if (typeof Temporal === "undefined") {
    console.log("Temporal no está disponible. Es necesario usar un polyfill.");
} else {
    // Obtener la fecha actual
    const hoy = Temporal.Now.plainDateISO();

    // Comprobar que existe un día válido entre 1 y 30
    if (hoy.day > 30) {
        console.log("No se puede generar un evento válido: hoy es día 31.");
    } else {
        // Generar un día aleatorio entre 1 y 30
        let diaEvento;

        do {
            diaEvento = Math.floor(Math.random() * 30) + 1;
        } while (diaEvento < hoy.day);

        // Crear la fecha del evento en el mes y año actuales
        const evento = Temporal.PlainDate.from({
            year: hoy.year,
            month: hoy.month,
            day: diaEvento
        });

        // Calcular los días que faltan
        const diasFaltan = hoy.until(evento, {
            largestUnit: "day"
        }).days;

        // Formatear las fechas en español
        const formatoFecha = {
            day: "numeric",
            month: "long",
            year: "numeric"
        };

        const hoyTexto = hoy.toLocaleString("es-ES", formatoFecha);
        const eventoTexto = evento.toLocaleString("es-ES", formatoFecha);

        // Mostrar el resultado usando template strings
        console.log(`La fecha actual es ${hoyTexto}`);
        console.log(`La fecha del evento: ${eventoTexto}`);
        console.log(`Días que faltan para el evento: ${diasFaltan} días`);
    }
}
