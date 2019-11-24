var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var s = '';
for (var i = 0; i < 3; ++i) {
    s += parseInt(n[0]) * parseInt(n[1][2 - i]) + '\n';
}
s += parseInt(n[0]) * parseInt(n[1]);
console.log(s);
