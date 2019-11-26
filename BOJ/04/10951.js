var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for (var i = 0; i < s.length; ++i) {
    var x = s[i].split(' ').map(e => parseInt(e));
    console.log(x[0] + x[1])
}