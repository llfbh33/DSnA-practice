// 7. Reverse Integer
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


// Constraints:

// -231 <= x <= 231 - 1


// console.log((-225 - (-225 % 10)) / 10)

// console.log(((-5 * 10) + - 2) * 10)

// this problem is solved in O(Log(X)) time
// check if the number provided is negitive and make it positive, keep a record if it is negitive or positive
// while x is greater than 0
    // get the last integer in the provided number by getting the left over amount from % 10
    // multipluy your result by 10, then add the remaining number you received to your result
    // divide the provided number by 10 to remove the last number, using Math.floor instead of - num is more widly accepted
// Check to make sure that the result is within the 32 bit range
// return either a negitive or positive result based on your saved check at the begining of the function
const reverse = (x) => {
    let res = 0;
    let neg = false;
    if (x < 0) {
        x *= -1;
        neg = true;
    }
    while (x > 0) {
        let num = x % 10;
        res = (res * 10) + num;
        x = Math.floor(x / 10);
    }
    if (res < -(2**31) || res > (2**31 - 1)) {
        return 0;
    }
    if (neg) {
        return res * -1;
    } else {
        return res
    }
};


// improved solve provided by chatGPT
const reverse2 = (x) => {
    let res = 0;
    const isNegative = x < 0;  // Check for negativity upfront
    x = Math.abs(x);  // Make x positive for easier calculations

    while (x > 0) {
        let num = x % 10;
        res = (res * 10) + num;

        // Check for overflow before multiplying further
        if (res > Math.pow(2, 31) - 1) return 0;

        x = Math.floor(x / 10);
    }

    // Return the result with the correct sign
    return isNegative ? -res : res;
}


console.log(reverse(123))
console.log(reverse2(123))
