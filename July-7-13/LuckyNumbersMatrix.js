// 1380. Lucky Numbers in a Matrix
// Easy
// Topics
// Companies
// Hint
// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.



// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.


// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= n, m <= 50
// 1 <= matrix[i][j] <= 105.
// All elements in the matrix are distinct.



// This code would work if we were to assume that there was an answer

const luckyNumbers = (matrix) => {
    let result = ''; // set a results variable

    for (let i = 0; i < matrix.length; i++) {   // loop through each of the rows within the matrix
        let min = Math.min(...matrix[i]);       // find the minimum element of that row
        if (min > result) result = min;         // if the min element is greater than the value of the result variable, set the new value
    }
    return [result];    // return the result within an array
}


const matrix = [
    [7, 8],
    [1, 2]
]  // answer should be [7]

const matrix2 = [
    [1,10,4,2],
    [9,3,8,7],
    [15,16,17,12]
] // answer should be [12]

const matrix3 = [
    [3,6],
    [7,1],
    [5,2],
    [4,8]
]

// console.log(luckyNumbers(matrix2))

// store the min num for each array

const lucky = (matrix) => {
    minEle = [];
    minIdx = []

    for (let i = 0; i < matrix.length; i++) {
        min = Math.min(...matrix[i])
        minEle.push(min);
        minIdx.push(matrix[i].indexOf(min))
    }

    return [minEle, minIdx]
}


console.log(lucky(matrix3))


// Final result I had
var luckyNumber  = function(matrix) {

    for (let i = 0; i < matrix.length; i++) {   // loop through each row of the matrix
        let min = Math.min(...matrix[i]);   // find and save the minium value within that row
        let idx = matrix[i].indexOf(min);   // save the index of that value (the column index)

        let isMax = true;                   // set a boolean varaible to true, if it stays true after all loop itterations it means we found the largest number
        for (let j = 0; j < matrix.length; j++) {   // loop through the matrix length to get the value of how many rows there are,
            if (matrix[j][idx] > min) {             // if the number in the row we are looking at is greater than our min num (cant check equals as that would always cancle out)
                isMax = false;                      // then we set the boolean false ( it will change to true when we loop back again)
                break;                              // and we break out of the loop itteration
            }
        }

        if (isMax) {                                // if we finished the loop cycle and our boolean is still true
            return [min];                         // we can return the min num as we know that is the answer
        }
    }
    return [];      // if we never finish the loop cycle with a true boolean, we return an empty array
};







// online solve
function luckyNumbers2(matrix) {
    const minRowElements = [];
    const minRowIndices = [];

    // Step 1: Find the minimum element in each row
    for (let i = 0; i < matrix.length; i++) {
        let minElem = Math.min(...matrix[i]);
        minRowElements.push(minElem);
        minRowIndices.push(matrix[i].indexOf(minElem));
    }

    const luckyNumbers = [];

    // Step 3: Verify if the minimum element in its row is also the maximum in its column
    for (let i = 0; i < minRowElements.length; i++) {
        const minElem = minRowElements[i];
        const colIndex = minRowIndices[i];

        let isMaxInColumn = true;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][colIndex] > minElem) {
                isMaxInColumn = false;
                break;
            }
        }

        if (isMaxInColumn) {
            luckyNumbers.push(minElem);
        }
    }

    return luckyNumbers;
}




// console.log(luckyNumbers2(matrix));  // Output: [7]
// console.log(luckyNumbers2(matrix2));  // Output: [12]
// console.log(luckyNumbers2(matrix3));  // Output: []
