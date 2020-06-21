const input = require('fs').readFileSync('stdin','utf8')

const PI = 3.14159

var raio = parseFloat(input) // Converteu para float

var area = PI * Math.pow(raio, 2)

console.log(`A = ${area}`)