var input = require('fs').readFileSync('stdin','utf8')

var lines = input.split('\n')

A = parseFloat(lines.shift())
B = parseFloat(lines.shift())
C = parseFloat(lines.shift())

media = (A * 2 + B * 3 + C * 5) / 10

console.log('MEDIA = '+media.toFixed(1))