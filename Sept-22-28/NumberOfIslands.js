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


// Tackle with a breadth-first search
    // because we want to search each node level by level
// work with two loops, one nested so that you can use the i and k as variables to find each node

// This function will find all the nodes which are part of the current island and set them to
    // a value of water so that each island is only checked once.
const helperFunc = (i, k, grid) => {
    // create a queue to hold all the neighbors to check
    let queue = [[i, k]];
    // set the current node location to 0 as it has already been checked
    grid[i][k] = '0';
    // create a directions array to help check all neighbors
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]] // Down, up, right, left

    // create a loop to walk through each node location within the queue
    while (queue.length > 0) {
        // create a variable for each part of the node coordinates to make them more easily accessable
        let [x, y] = queue.shift();
        // create a loop to check each direction around the current queue node to check neighbors
        for (let [dx, dy] of directions) {
            // newX and newY will be the coordinate neighbors
            let newX = x + dx;
            let newY = y + dy;
            // check that the newX num and newY num fall within the indecie range of grid, and that the coordinates node === 1
            if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && grid[newX][newY] === '1') {
                // the coordinates exist within the grid and is land then we want to change that to water and push the new coordinates to check their neighbors
                queue.push([newX, newY]);
                grid[newX][newY] = '0';
            }
        }
    }
}

const numIslands = (grid) => {
    // set in place a condition incase no grid is provided or the grid is empty
    if (!grid || grid.length === 0) return 0;
    // keep a count of the number of islands
    let countIslands = 0;

    // create a nested for loop to check each node
    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[i].length; k++) {
            // if the node is equal to 1 we found a new island
            if (grid[i][k] === '1') {
                // increase the count
                console.log([i, k])
                countIslands++;
                // and send the coordinates to the helper function to remove all elements of that island
                helperFunc(i, k, grid)
            }
        }
    }
    return countIslands;
}


// in order to refraine from counting an island once we are altering the original grid
const bfs = (i, j, grid) => {
    let queue = [[i, j]];
    grid[i][j] = '0';  // Mark the cell as visited by setting it to '0'
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // Down, Up, Right, Left

    while (queue.length > 0) {
        let [x, y] = queue.shift();
        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && grid[newX][newY] === '1') {
                queue.push([newX, newY]);
                console.log()
                grid[newX][newY] = '0';  // Mark the new cell as visited
            }
        }
    }
};

const numIslands2 = function(grid) {
    if (!grid || grid.length === 0) return 0;

    let numIslands = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                numIslands++; // Found a new island
                bfs(i, j, grid);    // Run BFS to mark the entire island
            }
        }
    }

    return numIslands;
}

let grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

let grid2 = [
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]
]

console.log(numIslands(grid2))
