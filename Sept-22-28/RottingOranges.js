// 994. Rotting Oranges
// Medium
// Topics
// Companies
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.



// Example 1:


// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.


// input of a grid
// output is an integer representing time elapes
// could there be multiple or always only one rotting orange- assumption there is only one

// find all rotting fruit
// for each rotting fruit
    // determin the directions and increase the count - if the coordinates exist

let grid = [
    [2,1,1],
    [1,1,0],
    [2,1,1]
];

const rotted = (grid) => {
    const rotting = [];

    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[0].length; j++) {

            if (grid[i][j] === 2) {
                rotting.push([i, j])
            }
        }
    }
    return rotting
}


const orangesRotting = (grid) => {
    let time = 0;
    const rotting = rotted(grid);
    let rot = true;

    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]] // down, up, right, left

    while(rot) {
        rot = false;
        let loops = rotting.length

        for (let i = 0; i < loops; i++) {
            let curr = rotting.shift()

            for (let corrdinate of direction) {
                let row = curr[0] + corrdinate[0];
                let col = curr[1] + corrdinate[1];

                if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] === 1) {
                    grid[row][col] = 2;
                    rotting.push([row, col])
                    rot = true;
                }
            }
        }
        if (rot) {
            time++;
        }
    }
    return time;
}

let grid2 = [
    [2,1,1],
    [0,1,1],
    [1,0,1]
]

console.log(orangesRotting(grid2))
