var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var ans = "";
for (var i = 1; i < parseInt(s[0]) + 1; i++) {
    var m = s[i].split(' ');
    ans += (parseInt(m[0]) + parseInt(m[1])).toString();
    ans += "\n";
}
console.log(ans);