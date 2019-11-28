var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s = s.map(e => parseInt(e));
var str = Number(s[0] * s[1] * s[2]).toString();
var cnt = new Array(10).fill(0);
for (var i = 0; i < str.length; ++i) {
    cnt[str.charCodeAt(i) - 48]++;
}
var ans = "";
for (var i = 0; i < 10; ++i) {
    ans += cnt[i] + "\n";
}
console.log(ans);