var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s = s.map(e => parseInt(e));
var ans = s.map((e, idx) => [e, idx]).reduce((r, next) => (next[0] > r[0] ? next : r));
console.log(ans[0] + "\n" + (ans[1] + 1));