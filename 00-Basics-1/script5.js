// 5. Contador del 1 al 10
let numbers = "";
for (let i = 1; i <= 10; i++) {
    numbers += i + "<br>";
}

// Mostrar en el div
window.onload = function() {
    document.getElementById("demo").innerHTML = numbers;
};