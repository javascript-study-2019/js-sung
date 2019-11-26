var s = require('fs').readFileSync('/dev/stdin').toString().trim();
var n = parseInt(s);
var m = next(n);
var len = 1;
while (n != m) {
    len++;
    m = next(m);
}

console.log(len);

function next(x) {
    var ret = x % 10 * 10;
    var sum = 0;
    while (x > 0) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }
    return ret + (sum % 10);
}