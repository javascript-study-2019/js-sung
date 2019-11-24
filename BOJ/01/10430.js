var s = require('fs').readFileSync('/dev/stdin').toString().split(' ')

var a = parseInt(s[0])
var b = parseInt(s[1])
var c = parseInt(s[2])

var x = (a + b) % c
var y = (a * b) % c

console.log(x)
console.log(x)
console.log(y)
console.log(y)