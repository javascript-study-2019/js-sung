var s = require('fs').readFileSync('/dev/stdin').toString().trim();
var arr = new Array(26).fill(-1);
for (var i = 0; i < s.length; ++i) {
    var idx = s.charCodeAt(i) - 97;
    if (arr[idx] == -1) arr[idx] = i;
}
var ans = "";
for (var i = 0; i < arr.length; ++i) {
    ans += arr[i] + " ";
}
console.log(ans);