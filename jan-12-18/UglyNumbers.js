// 264. Ugly Number II
// Medium
// Topics
// Companies
// Hint
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.



// Example 1:

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.


// Constraints:

// 1 <= n <= 1690

const nthUglyNumber = function(n) {

    const uglyNumbers = [1];
    let i2 = 0, i3 = 0, i5 = 0;

    while (uglyNumbers.length < n) {
        const next2 = uglyNumbers[i2] * 2;
        const next3 = uglyNumbers[i3] * 3;
        const next5 = uglyNumbers[i5] * 5;

        const nextUgly = Math.min(next2, next3, next5);
        uglyNumbers.push(nextUgly);

        if (nextUgly === next2) i2++;
        if (nextUgly === next3) i3++;
        if (nextUgly === next5) i5++;
    }

    return uglyNumbers[n - 1];
}
/// Example usage:
//console.log(nthUglyNumber(10)); // Output: 12
// space: O(n)
// time: O(n)
