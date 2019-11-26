var s = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
var h = parseInt(s[0]), m = parseInt(s[1]);
m -= 45;
if (m < 0) {
    h--;
    m += 60;
}
if (h < 0) {
    h += 24;
}
console.log(h + " " + m);