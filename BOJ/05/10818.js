var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const mi = (minimum, next) => Math.min(minimum, next);
const mx = (maximum, next) => Math.max(maximum, next);
var arr = s[1].split(' ').map(e => parseInt(e));
console.log(arr.reduce(mi) + " " + arr.reduce(mx));