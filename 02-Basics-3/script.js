// Exercise 1
function salute(text) {
    document.getElementById('salute-output').innerHTML = `Hello, ${text}!`;
}

// Exercise 2
function evenOdd(num) {
    const number = parseInt(num);
    const result = (number % 2 === 0) ? "Even" : "Odd";
    document.getElementById('even-odd-result').innerHTML = `The number ${number} is ${result}.`;
}

// Exercise 3
function check(text) {
    const result = (text.trim().toUpperCase() === 'JAVASCRIPT') ? "Correct!" : "Incorrect!";
    document.getElementById('text-js-check-result').innerHTML = result;
}

// Exercise 4
function multiply(x, y) {
    return x * y;
}

// Exercice 5
function randomNumber0to99() {
    document.getElementById('random-0-99').innerHTML = "Random number between 0 and 99: " + (Math.floor(Math.random() * 100));
}

function randomNumber1to100() {
    document.getElementById('random-1-100').innerHTML = "Random number between 1 and 100: " + (Math.floor(Math.random() * 100) + 1);
}

// Exercise 6
function reverseString(st) {
    return st.split('').reverse().join('');
}

// Exercise 7
function squareRoot(num) {
    return "SQRT = " + (Math.sqrt(num));
}

// Exercise 8
function average(num1, num2, num3) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    return "Average = " + ((n1 + n2 + n3) / 3).toFixed(2);
}
