var s = require('fs').readFileSync('/dev/stdin').toString().trim();
s = s.split(' ').map(e => parseInt(reverseStr(e)));
if (s[0] > s[1]) {
    console.log(s[0]);
} else {
    console.log(s[1]);
}

function reverseStr(str) {
    return str.split("").reverse().join("");
}