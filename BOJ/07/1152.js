var s = require('fs').readFileSync('/dev/stdin').toString().trim();
if (s === "") {
    console.log(0);
} else {
    s = s.split(' ');
    console.log(s.length);
}
