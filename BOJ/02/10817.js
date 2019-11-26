var s = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

var s = s.map(e => parseInt(e));
var a = s[0], b = s[1], c = s[2];

if(a >= b) {
    if(b >= c) console.log(b);
    else console.log(Math.min(a, c));
} else {
    if(a >= c) console.log(a);
    else console.log(Math.min(b, c));
}