// 36. Valid Sudoku
// Medium
// Topics
// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:


// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.


// "." is an empty space
// board width and height will always be nine squares
    // nine slots within an array and nine arrays


// make sure there are no duplicates per array
// make sure there are no duplicates per column
// make sure there are no duplicates per 3 x 3 square

const checkRows = (row) => {
    let hold = {};

    for (let i = 0; i < row.length; i++) {
        if (row[i] === '.') continue;
        if (hold[row[i]]) return false;
        else hold[row[i]] = 1;
    }
    return true;
}

// helper functions just create more loops, this can all be done within 2 loops as we are looking at each individual element



const isValid = (board) => {
    let square = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
    }

    for (let i = 0; i < board.length; i++) {
        if (!checkRows(board[i])) return false;

        let j = 0;
        let squareLoc = 1
        let column = {}
        while (j < 9) {
            console.log(board[j][i])
            if (board[j][i] === '.') {
                j++;
                continue;
            }
            if (column[board[j][i]]) return false;
            else column[board[j][i]] = 1;

            j++
        }
    }
    return true

}

let board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValid(board))



// approach found online
var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                continue;
            }

            let value = board[r][c];
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
                return false;
            }

            rows[r].add(value);
            cols[c].add(value);
            boxes[boxIndex].add(value);
        }
    }

    return true;
}

console.log(isValidSudoku(board))
