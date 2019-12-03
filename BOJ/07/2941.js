var s = require('fs').readFileSync('/dev/stdin').toString().trim();
var count = 0;
for (var i = 0; i < s.length; ++i) {
    if (s[i] == 'c') {
        if (s[i + 1] == '=' || s[i + 1] == '-') {
            i++;
        }
    } else if (s[i] == 'd') {
        if (s[i + 1] == '-') {
            i++;
        } else if (s[i + 1] == 'z' && s[i + 2] == '=') {
            i += 2;
        }
    } else if (s[i] == 'l') {
        if (s[i + 1] == 'j') {
            i++;
        }
    } else if (s[i] == 'n') {
        if (s[i + 1] == 'j') {
            i++;
        }
    } else if (s[i] == 's') {
        if (s[i + 1] == '=') {
            i++;
        }
    } else if (s[i] == 'z') {
        if (s[i + 1] == '=') {
            i++;
        }
    }
    count++;
}
console.log(count);