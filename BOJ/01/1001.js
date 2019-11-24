var s = require('fs').readFileSync('/dev/stdin').toString().split(' ')

var a = parseInt(s[0])
var b = parseInt(s[1])

console.log(a - b)