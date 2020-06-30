var input = require('fs').readFileSync('stdin','utf8')

var lines = input.split('\n')

var nome = lines.shift()
var salarioFixo = parseFloat(lines.shift())
var totalVendas = parseFloat(lines.shift())

var comissao = totalVendas * 0.15

var salarioFinal = salarioFixo + comissao

console.log('TOTAL = R$ '+ salarioFinal.toFixed(2));