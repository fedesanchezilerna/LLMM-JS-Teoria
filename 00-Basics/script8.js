// 8. Función que multiplica dos números
function multiply(num1, num2) {
    return num1 * num2;
}

// Pedir num al usuario
let number1 = prompt("Mutiply -> Enter the first number:");
let number2 = prompt("Enter the second number:");

// Convertir a num -> multiplicar
let result = multiply(Number(number1), Number(number2));

// Mostrar resultado
console.log("Result: " + number1 + " x " + number2 + " = " + result);