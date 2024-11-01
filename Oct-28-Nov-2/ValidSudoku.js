// Valid Sudoku

// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:


const validSudoku = (board) => {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const squares = new Array(9).fill(0).map(() => new Array(9).fill(0));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;

            const num = Number(board[i][j]) - 1;
            const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i][num] || cols[j][num] || squares[k][num]) {
                return false;
            }

            rows[i][num] = cols[j][num] = squares[k][num] = 1;
        }

    }
    return true;

}
