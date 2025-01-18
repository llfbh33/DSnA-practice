// 229. Majority Element II
// Medium
// Topics
// Companies
// Hint
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.



// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]


// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109


// Follow up: Could you solve the problem in linear time and in O(1) space?

const majorityElement = function(nums) {

    const n = nums.length;
    const threshold = Math.floor(n / 3);
    const countMap = {};

    for (const num of nums) {
        if (countMap[num] === undefined) {
            countMap[num] = 0;
        }
        countMap[num]++;
    }

    const result = [];

    for (const key in countMap) {
        if (countMap[key] > threshold) {
            result.push(Number(key));
        }
    }

    return result;
}
