var s = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(s.charCodeAt(0));