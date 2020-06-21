const input = require('fs').readFileSync('stdin','utf8')

var values = input.split('\n')

A = parseInt(values.shift())
B = parseInt(values.shift())

console.log('SOMA = '+ (A+B))