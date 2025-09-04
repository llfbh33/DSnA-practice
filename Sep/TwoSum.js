// Two Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input: 
// nums = [3,4,5,6], target = 7

// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:

// Input: nums = [4,5,6], target = 10

// Output: [0,2]
// Example 3:

// Input: nums = [5,5], target = 10

// Output: [0,1]
// Constraints:

// 2 <= nums.length <= 1000
// -10,000,000 <= nums[i] <= 10,000,000
// -10,000,000 <= target <= 10,000,000


/* 
Due to the fact that my copilot loves to format my functions for me, we are going to whiteboard the entire function before typing it out

input - an array of numbers, and target number
output - two indices whos value sums to the given target

There will always be an answer

Return smallet indice first

basic - nested loops - O(n²)

hashmap with a loop O(n)
{
    3: 3,
    4: 1,
    5: 2,
   
}

- open function
- set up our hashmap
- open a loop
- find the last number in the sum argument - target = current number + num / num = target - current number
    - store num
- check map, for map[num]
    - if num exists return the value of map[num], i
- if it doesn't exist, then we place out map[current number] = i
continue
do not need an end statement, will have an answer

*/


function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const num = target - curr;

        if (map[num] !== undefined) {
            return [map[num], i]
        } else {
            map[curr] = i;
        }
    }
}