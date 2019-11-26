var s = require('fs').readFileSync('/dev/stdin').toString().trim();
s = parseInt(s);
var ans = "";
for (var i = 1; i <= s; ++i) {
    ans += ' '.repeat(s - i) + '*'.repeat(i) + '\n';
}
console.log(ans);