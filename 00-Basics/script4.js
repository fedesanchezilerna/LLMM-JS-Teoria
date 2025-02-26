// 4. Número par o impar
let num1 = prompt("Enter a number:");
let num2 = prompt("Enter another number:");

// Convertir a números
num1 = Number(num1);
num2 = Number(num2);

// Check 1er número
if (num1 % 2 === 0) {
    console.log(num1 + " is even");
} else {
    console.log(num1 + " is odd");
}

// Check 2do número
if (num2 % 2 === 0) {
    console.log(num2 + " is even");
} else {
    console.log(num2 + " is odd");
}