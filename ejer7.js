
"use strict";

// 1. 2 > 1
console.log("2 > 1:", 2 > 1); 
// true: 2 es mayor que 1.

// 2. "2" > 1
console.log('"2" > 1:', "2" > 1);
// true: JavaScript convierte el string "2" al número 2.

// 3. "01" == 1
console.log('"01" == 1:', "01" == 1);
// true: == convierte "01" al número 1 antes de comparar.

// 4. 0 == false
console.log("0 == false:", 0 == false);
// true: == convierte false en 0.

// 5. "" == false
console.log('"" == false:', "" == false);
// true: "" se convierte en 0 y false también equivale a 0.

// 6. 0 === false
console.log("0 === false:", 0 === false);
// false: === compara también el tipo; number y boolean son distintos.

// 7. null == undefined
console.log("null == undefined:", null == undefined);
// true: == considera null y undefined iguales entre sí.

// 8. null === undefined
console.log("null === undefined:", null === undefined);
// false: null y undefined tienen tipos diferentes.

// 9. null > 0
console.log("null > 0:", null > 0);
// false: null se convierte en 0; 0 no es mayor que 0.

// 10. null >= 0
console.log("null >= 0:", null >= 0);
// true: null se convierte en 0; 0 sí es mayor o igual que 0.

// 11. undefined == 0
console.log("undefined == 0:", undefined == 0);
// false: undefined no se convierte en 0 en esta comparación
// de igualdad abstracta.

// 12. "Glow" > "Glee"
console.log('"Glow" > "Glee":', "Glow" > "Glee");
// true: se comparan los strings carácter por carácter.
// G = G, l = l; después o tiene un código Unicode mayor que e.

// 13. 5 === 5
console.log("5 === 5:", 5 === 5);
// true: mismo valor y mismo tipo (number).

// 14. "5" === 5
console.log('"5" === 5:', "5" === 5);
// false: uno es string y el otro es number.

// 15. 10 != "10"
console.log('10 != "10":', 10 != "10");
// false: != permite conversión de tipos; ambos valores se convierten
// en 10 y, por tanto, son iguales.

// 16. 10 !== "10"
console.log('10 !== "10":', 10 !== "10");
// true: !== detecta que los tipos son diferentes.
