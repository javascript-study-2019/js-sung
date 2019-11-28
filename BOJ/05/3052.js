var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s = s.map(e => parseInt(e));
var r = new Array(42).fill(0);
for (var i = 0; i < 10; ++i) {
    r[s[i] % 42]++;
}
var cnt = 0;
for (var i = 0; i < r.length; ++i) {
    if (r[i] > 0) cnt++;
}
console.log(cnt);