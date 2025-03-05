// 1. Mayor
function max(a, b) {
    return a > b ? a : b;
}

console.log("1. Mayor");
console.log(max(10, 20));

// 2. Convertir temperatura
function c2f(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log("\n2. Convertir temperatura");
console.log(c2f(20));

// 3. Longitud de una palabra. Comprueba si es más larga que 10 caracteres.
function moreThan10(word) {
    return word.length > 10;
}

console.log("\n3. Longitud de una palabra");
console.log(moreThan10("Hola"));

// 4. Tipo de número
function numberType(number) {
    if (number > 0) {
        return "positivo";
    } else if (number < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

console.log("\n4. Tipo de número");
console.log(numberType(10));
console.log(numberType(-10));
console.log(numberType(0));


// 5. Área de un rectángulo
function areaSquare(base, height) {
    return base * height;
}

console.log("\n5. Área de un rectángulo");
console.log(areaSquare(10, 20));

// 6. Par o impar
function evenOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}

console.log("\n6. Par o impar");
console.log(evenOdd(2));
console.log(evenOdd(3));

// 7. Palíndromo
function isPalinbrome(word) {
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}

console.log("\n7. Palíndromo");
console.log(isPalinbrome("arriba la birra"));
console.log(isPalinbrome("hello"));

// 8. Divisible por 3
function divisibleBy3(number) {
    return number % 3 === 0;
}

console.log("\n8. Divisible por 3");
console.log("3 -> " + divisibleBy3(3));
console.log("4 -> " + divisibleBy3(4));

// 9. Área de un círculo
function areaCircle(radius) {
    return Math.PI * radius * radius;
}

console.log("\n9. Área de un círculo");
console.log(areaCircle(10));

// 10. Convertir de USD a Euros
function convert2Euros(dollars) {
    return dollars * 0.85;
}

console.log("\n10. Convertir de USD a Euros");
console.log(convert2Euros(10));

// 11. Calcular descuento
function discount(price, percentage) {
    return price * (1 - percentage / 100);
}

console.log("\n11. Calcular descuento");
console.log("Precio: 1200€, Descuento: 10%");
console.log("Descuento: " + (1200 - discount(1200, 10)) + "€");
console.log("Precio con descuento: " + discount(1200, 10) + "€");

// 12. Calcular distancia recorrida
function distance(speed, time) {
    return speed * time;
}

console.log("\n12. Calcular distancia recorrida");
console.log("Velocidad: 100km/h, Tiempo: 2h");
console.log("Distancia: " + distance(100, 2) + "km");

// 13. Convertir km a millas
function km2Miles(km) {
    return km * 0.621371;
}

console.log("\n13. Convertir km a millas");
console.log("100km -> " + km2Miles(100) + "millas");

// 14. Descuento según el cliente
function priceDiscount(price, client) {
    if (client === "VIP") return price * 0.2;
    if (client === "Premium") return price * 0.1;
    return price;
}

console.log("\n14. Descuento según el cliente");
console.log("Precio: 1200€, Cliente: VIP - Descuento: " + priceDiscount(1200, "VIP") + "€");
console.log("Precio con descuento: " + (1200 - priceDiscount(1200, "VIP")) + "€");

// 15. Precio del viaje
function travelPrice(hour) {
    if (hour > 6 && hour < 12) return 10;
    if (hour > 12 && hour < 18) return 15;
    return 20;
}

console.log("\n15. Precio del viaje");
console.log("Hora: 10am -> " + travelPrice(10) + "€");
console.log("Hora: 1pm -> " + travelPrice(13) + "€");
console.log("Hora: 6pm -> " + travelPrice(18) + "€");

// 16. Tiempo de entrega
function deliveryTime(destination) {
    if (destination === "local") return 1;
    if (destination === "nacional") return 3;
    if (destination === "internacional") return 7;
}

console.log("\n16. Tiempo de entrega");
console.log("Destino: local -> " + deliveryTime("local") + "día");
console.log("Destino: nacional -> " + deliveryTime("nacional") + "días");
console.log("Destino: internacional -> " + deliveryTime("internacional") + "días");

// 17. Tiempo de uso
function fee(hours) {
    if (hours <= 1) return 10;
    if (hours > 1 && hours <= 5) return 20;
    return 30;
}

console.log("\n17. Tiempo de uso");
console.log("Horas: 1 -> " + fee(1) + "€");
console.log("Horas: 3 -> " + fee(3) + "€");
console.log("Horas: 7 -> " + fee(7) + "€");