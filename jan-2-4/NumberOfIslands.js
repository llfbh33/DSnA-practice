// 200. Number of Islands
// Medium
// Topics
// Companies
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

const numIslands = (grid) => {
    let count = 0;
    const dfs = (i, j) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
        if (grid[i][j] === "0") return;
        grid[i][j] = "0";
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++)
        if (grid[i][j] === "1") {
            count++;
            dfs(i, j);
        }
    return count;
    };