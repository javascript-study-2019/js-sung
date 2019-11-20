// 높이 30 폭 자유
var height = 32, width = 32;
var i, j;
var str;
var ans = "";
for(i = 0; i < height / 4; i++) {
    str = "";
    for(j = 0; j < width / 2 - i; j++) {
        str += " ";
    }
    for(j = 0; j < 2 * i - 1; j++) {
        str += "*";
    }
    str += "\n";
    ans += str;
}
for(i = 0; i < height / 4; i++) {
    str = "";
    for(j = 0; j < i; j++) {
        str += " ";
    }
    for(j = 0; j < width - 2 * i; j++) {
        str += "*";
    }
    str += "\n";
    ans += str;
}
for(i = height / 4 - 2; i >= 0; i--) {
    str = "";
    for(j = 0; j < i; ++j) {
        str += " ";
    }
    for(j = 0; j < width - 2 * i; ++j) {
        str += "*";
    }
    str += "\n";
    ans += str;
}
for(i = height / 4 - 1; i >= 0; i--) {
    str = "";
    for(j = 0; j < width / 2 - i; j++) {
        str += " ";
    }
    for(j = 0; j < 2 * i - 1; j++) {
        str += "*";
    }
    str += "\n";
    ans += str;
}
console.log(ans);
