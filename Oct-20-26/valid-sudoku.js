//Valid Sudoku


function isValidSudoku(board) {
  // Initialize sets to track rows, columns, and 3x3 sub-boxes
  // need to create a set for each row, for each column and for each box
  // that is why we are creating an array of 9 sets for each to kep track of each row not just one row or other typw
  const rows = new Array(9).fill().map(() => new Set());
  const cols = new Array(9).fill().map(() => new Set());
  const boxes = new Array(9).fill().map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      // Ignore empty cells
      if (num === '.') continue;

      // Calculate which 3x3 box we're in
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      console.log(rows)
      // Check for duplicates in row, column, or box
      if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
        return false;
      }

      // Add number to the row, column, and box sets
      rows[i].add(num);
      cols[j].add(num);
      boxes[boxIndex].add(num);
    }
  }

  return true;
}

let board =
[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board)) // true
