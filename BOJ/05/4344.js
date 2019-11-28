var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for (var i = 1; i < s.length; ++i) {
    var line = s[i].split(' ').map(e => parseInt(e));
    var n = line[0];
    var total = 0, cnt = 0;
    for (var j = 1; j < line.length; ++j) {
        total += line[j];
    }
    var avg = total / n;
    for (var j = 1; j < line.length; ++j) {
        if (line[j] > avg) cnt++;
    }
    console.log(Number(cnt / n * 100).toFixed(3) + "%");
}