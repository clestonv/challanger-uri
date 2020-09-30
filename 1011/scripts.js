var input = require('fs').readFileSync('stdin','utf-8')

var raio = parseFloat(input)
var PI = 3.14159

var valumeEsfera = (4/3) * PI * Math.pow(raio, 3)

console.log("VOLUME = "+valumeEsfera.toFixed(3))