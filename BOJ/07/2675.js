var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var ans = "";
for (var i = 1; i < s.length; ++i) {
    var line = s[i].split(' ');
    var n = parseInt(line[0]);
    for (var j = 0; j < line[1].length; ++j) {
        ans += line[1][j].repeat(n);
    }
    ans += "\n";
}
console.log(ans);