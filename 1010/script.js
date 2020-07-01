var input = require('fs').readFileSync('stdin','utf-8')

var lines = input.split('\n')

var num1 = lines.shift()
var num2 = lines.shift()

var prod01 = num1.split(' ')
var cod1 = prod01.shift()
var qt1 = parseInt(prod01.shift())
var vl1 = parseFloat(prod01.shift())

var prod02 = num2.split(' ')
var cod2 = prod02.shift()
var qt2 = parseInt(prod02.shift())
var vl2 = parseFloat(prod02.shift())

console.log('VALOR A PAGAR: R$ '+((qt1*vl1)+(qt2*vl2)).toFixed(2))
