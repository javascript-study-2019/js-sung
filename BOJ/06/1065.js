var s = require('fs').readFileSync('/dev/stdin').toString().trim();
s = parseInt(s);

var ans = 0;
for (var i = 1; i <= s; ++i) {
    if (han(i)) ans++;
}
console.log(ans);

function han(n) {
    n = Number(n).toString();
    for (var i = 2; i < n.length; ++i) {
        if (n.charCodeAt(i - 1) - n.charCodeAt(i - 2) != n.charCodeAt(i) - n.charCodeAt(i - 1))
            return false;
    }
    return true;
}