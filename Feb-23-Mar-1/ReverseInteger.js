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


const reverse = function(x) {
    let sign = Math.sign(x);
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));

    if (reversed > 2**31 - 1) {
        return 0;
    }

    return sign * reversed;
}
// Test cases
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0
console.log(reverse(1534236469)); // Output: 0 (overflow case)

// space complexity: O(1)
// time complexity: O(n) where n is the number of digits in x
// Explanation:
// 1. We first determine the sign of the input number x using Math.sign(x).
// 2. We then convert the absolute value of x to a string, split it into an array of characters, reverse the array, and join it back into a string.
// 3. We parse the reversed string back into an integer using parseInt.
// 4. We check if the reversed integer is greater than 2^31 - 1 (the maximum value for a signed 32-bit integer). If it is, we return 0.
// 5. Finally, we return the reversed integer multiplied by its original sign.

// new file
// I did work for valstorm however It will not show up untill Jared pushes all the changes to main
