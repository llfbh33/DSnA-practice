let s = "PAYPALISHIRING"
let o = "PAHNAPLSIIGYPISRI"
let l = "PAHNAPLSIIGYIR"


 // newStringVariable - initialize
// 1, 2, 3
// 1, 3, 4 - after3rows the rows will just keep increasing by 2
// if one row loop is 1
// if two rows loop is 2
// if 3 rows or greater, loop is (RC- 2) * 2 + 2  = index counter (increment by itself durning one loop until there is not ele at index)

 // 3 rows - idx(0) - ixd(4) - idx(8) -
 // 4 rows - idx(0) - idx(6) - idx(12) - increases by 2 every time
 // 5 rows - idx(0) - idx(8) - idx(16)

// 4 rows:
 // loop 2 will be idx(i) - idx(6 - (i - 1)) - idx(6 + (i + 1)) - idx(12 - 1) - idx(12 + 1) - as long as these indecies exist then we will count them as these for loop 2
 // loop 3 - idx(i) - idx(6 - (i - 1)) - idx(6 - (i + 1))
 // loop 4 - idx(i) - idx(6 - (i - 1)) - idx(6 - (i + 1)) make a conditional for the last loop


var convert = function(s, numRows) {
    let newStr = '';
    let idxC = 1;

    if (numRows >= 2) {
        idxC = (numRows - 2) * 2 + 2
    };
    for (let i = 0; i < numRows; i++) {
        let count = i;

        while(s[count]) {
            newStr += s[count];

            if (i === 0 || numRows === 2 || numRows - 1 === i) {
                count += idxC
                continue;
            };
            if (!s[count + idxC - i - 1]) break;
            else {
                newStr += s[count + idxC - i - 1 ]
                count += idxC;
            };
        }
    }
    return newStr
};

console.log(convert(s, 3))
