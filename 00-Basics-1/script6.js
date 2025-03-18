// 6. Suma de números en un array
// Crear un array de números
let arrayNumber = [5, 10, 15, 20, 25];

// Calcular la suma usando el método reduce
let sum = arrayNumber.reduce((total, num) => total + num, 0);

// Mostrar array y suma
console.log("Numbers:", arrayNumber);
console.log("Sum of all numbers:", sum);