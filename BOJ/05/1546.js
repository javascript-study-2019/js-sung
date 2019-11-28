var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = parseInt(s[0]);
s = s[1].split(' ').map(e => parseInt(e));
var total = s.reduce((sum, next) => sum + next);
var mx = s.reduce((m, next) => Math.max(m, next));
console.log(total / n / mx * 100);
