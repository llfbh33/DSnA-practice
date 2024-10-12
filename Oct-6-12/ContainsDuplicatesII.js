// 219. Contains Duplicate II
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

 // create a hashmap, save the number as a key and the index as a value
 // if we run into the same number, check the distance between current and last idx
 // if the distance is greater than k,
    // set value in map to current index and continue else return true
// return false


var containsNearbyDuplicate = function(nums, k) {
    if (nums.length === 1) return false;

    const map = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (map[num] !== undefined && i - map[num] <= k) return true;
        else map[num] = i;

    }
    return false;
};


/*
Time complexity - O(n) because we are looping through each element in the array once
Space Complexity - O(n) because we are storing the index of each element in the array max
    one time in the hashmap
*/
