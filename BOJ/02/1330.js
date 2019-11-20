// Input
var s = require('fs').readFileSync('/dev/stdin').toString().split(' ')

var a = parseInt(s[0])
var b = parseInt(s[1])

if (a > b)
    console.log(">");
else if (a < b)
    console.log("<")
else
    console.log("==")