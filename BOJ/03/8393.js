var s = require('fs').readFileSync('/dev/stdin').toString().trim();
s = parseInt(s);
console.log(s * (s + 1) / 2);