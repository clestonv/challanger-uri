var input = require('fs').readFileSync('stdin','utf8')

var lines = input.split('\n');

A = parseFloat(lines.shift())
B = parseFloat(lines.shift())
C = parseFloat(lines.shift())
D = parseFloat(lines.shift())

diferenca = (A * B - C * D)

console.log('DIFERENCA = '+ diferenca)