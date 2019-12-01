var s = require('fs').readFileSync('/dev/stdin').toString().trim();
var arr = new Array(26).fill(0);
for (var i = 0; i < s.length; ++i) {
    var c = s.charCodeAt(i);
    if (65 <= c && c <= 90) {
        c -= 65;
    } else if (97 <= c && c <= 122) {
        c -= 97;
    }
    arr[c]++;
}
var mx = 0, ans;
for (var i = 0; i < 26; ++i) {
    if (mx < arr[i]) {
        mx = arr[i];
        ans = String.fromCharCode(65 + i);
    } else if (mx == arr[i]) {
        ans = "?";
    }
}
console.log(ans);