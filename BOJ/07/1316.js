var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var ans = 0;
for (var i = 1; i < s.length; ++i) {
    if (group(s[i])) ans++;
}
console.log(ans);

function group(str) {
    var arr = new Array(26).fill(false);
    for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i) - 97;
        if (arr[c]) {
            return false;
        } else {
            arr[c] = true;
            var tmp = str.charAt(i);
            while (true) {
                if (tmp != str.charAt(++i)) {
                    i--;
                    break;
                }
            }
        }
    }
    return true;
}