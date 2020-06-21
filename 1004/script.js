var input = require('fs').readFileSync('stdin','utf8')

var values = input.split('\n')

var A = parseInt(values.shift())
var B = parseInt(values.shift())

prod = A * B
console.log('PROD = '+prod)