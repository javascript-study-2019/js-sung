var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var x = parseInt(s[0].split(' ')[1]);
var ans = "";
s[1].split(' ').map((e) => {
    if (parseInt(e) < x) ans += e + ' ';
})
console.log(ans);