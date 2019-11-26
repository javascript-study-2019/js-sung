var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s = parseInt(s);
var ans = "";
for(var i = s; i > 0; --i) {
    ans += i + '\n';
}
console.log(ans);