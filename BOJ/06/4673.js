function d(n) {
    var ret = n;
    while (n > 0) {
        ret += n % 10;
        n = Math.floor(n / 10);
    }
    return ret;
}

var ans = "";
var arr = new Array(10001).fill(false);
for (var i = 1; i <= 10000; ++i) {
    var t = d(i);
    if (t <= 10000)
        arr[d(i)] = true;
}

for (var i = 1; i <= 10000; ++i) {
    if (!arr[i]) ans += i + "\n";
}

console.log(ans);