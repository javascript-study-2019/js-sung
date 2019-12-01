var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var ans = 0;
for (var j = 0; j < s[1].length; ++j) {
    ans += s[1].charCodeAt(j) - 48;
}
console.log(ans);
