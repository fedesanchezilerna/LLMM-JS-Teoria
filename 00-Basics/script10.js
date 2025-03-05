// 10. Revertir una caden
const palabra = prompt("Invertir palabra -> Ingresa una palabra:");

console.log("Palabra original:", palabra);

function invertirPalabra(palabra) {
    return palabra.split('').reverse().join('');
}

const palabraInvertida = invertirPalabra(palabra);

console.log("Palabra invertida:", palabraInvertida);

