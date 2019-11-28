var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var ans = "";
for (var i = 1; i < s.length; ++i) {
    ans += process(s[i]) + "\n";
}
console.log(ans);

function process(str) {
    var score = 0, curr = 1;
    for (var i = 0; i < str.length; ++i) {
        if (str[i] === 'O') {
            score += curr;
            curr++;
        } else {
            curr = 1;
        }
    }
    return score;
}