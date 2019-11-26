var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s = parseInt(s);
var ans = "";
for (var i = 1; i <= s; ++i) {
    ans += i + '\n';
}
console.log(ans);