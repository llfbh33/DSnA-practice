let s = "PAYPALISHIRING"
let o = "PAHNAPSIGYPIR"
let l = "PAHNAPLSIIGYIR"
var convert = function(s, numRows) {
    let newStr = '';
    let idxC = 1;

    if (numRows >= 2) {
        idxC = (numRows - 2) * 2 + 2
    }

    for (let i = 0; i < numRows; i++) {
        let count = i;

        while(s[count]) {
            newStr += s[count];
            console.log(newStr)
            if (i === 0 || numRows === 2) {
                count += idxC
                continue;
            }

            if (!s[count + idxC - i - 1]) break;
            else {
                newStr += s[count + idxC - i - 1 ]
                console.log(newStr, count)
                count += idxC + i + 1;
            }
        }
    }
    return newStr
};

console.log(convert(s, 3))
