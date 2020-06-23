var input = require('fs').readFileSync('stdin','utf8')

var lines = input.split('\n')

cod = parseInt(lines.shift())
A = parseInt(lines.shift())
B = parseFloat(lines.shift())

valor = A * B

console.log('NUMBER = '+cod)
console.log('SALARY = U$ '+valor.toFixed(2))
