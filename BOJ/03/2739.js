var s = require('fs').readFileSync('/dev/stdin').toString().trim();
s = parseInt(s);

for (var i = 1; i < 10; ++i) {
    console.log(s + " * " + i + " = " + (s * i));
}