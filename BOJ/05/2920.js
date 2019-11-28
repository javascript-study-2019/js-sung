var s = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
s = s.map(e => parseInt(e));
if (equals(s, [1, 2, 3, 4, 5, 6, 7, 8])) {
    console.log("ascending");
} else if (equals(s, [8, 7, 6, 5, 4, 3, 2, 1])) {
    console.log("descending");
} else {
    console.log("mixed");
}

function equals(arr1, arr2) {
    if (arr1.length != arr2.length)
        return false;
    for (var i = 0; i < arr1.length; ++i)
        if (arr1[i] != arr2[i]) return false;
    return true;
}