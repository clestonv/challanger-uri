var input = require('fs').readFileSync('stdin','utf8');

var values = input.split("\n") // Importa um array

var A = parseInt(values.shift())    // SHIFT: Remove o primeiro elemento de um array e retorna este valor
var B = parseInt(values.shift())    // SHIFT: Remove o primeiro elemento de um array e retorna este valor

X = A + B
console.log(`X = ${X}`)