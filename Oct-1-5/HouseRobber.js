// 198. House Robber
// Attempted
// Medium
// Topics
// Companies
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.


// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

// return 0 if there are no houses (elements within the array)
// return the value of the only element if there is only one house (one element within the array)
// initialize an array to store the maximum amount robbed up to each house
const rob = (nums) => {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // Initialize an array to store the maximum amount robbed up to each house
    let dp = new Array(nums.length);

    // Base cases
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // Fill the dp array using the recurrence relation
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    // Return the maximum amount robbed
    console.log(dp)
    return dp[dp.length - 1];
}


let nums = [2,1,1,2];  // 4

console.log(rob(nums))


// we want to calcultate if we were to reach each house what is the max we could have stolen at that point
/*
example:
    let nums = [2,1,1,2];  // 4
    console.log(rob(nums))

- So we create an array that can hold the max stolen at that time
    let dp = [null, null, null, null]

- We set the value of the first location to the value of the first house as you would only be able
            to steal 2 if there is only the one house in the array
    dp = [2, null, null, null];

- Then we set the second position to the max between the first and second house
            this is how we know which house to start with (the last value in the dp array will be our return value)
    dp = [2, 2, null, null];

- Now we loop through the remaining houses (elements) within the array
            and the dp[i] location will be equal to the max numbers between dp[i-1], nums[i] + dp[i-2]
            So the value will either be our previous 2 or will be 1 + 2 (nums[2] + dp[i-2])
            In this manor we make sure that we do not let any houses which are adjacent be robbed
    dp = [2, 2, 3, null];

- loop through for the last time and we check for the max again, between dp[i-1](3) or nums[i](2) + dp[i-2](2) = 4
    dp = [2, 2, 3, 4];

- return the last number in the array as the max amount able to be stolen

    */

// return nums[0] if only one, because there are no calculations necessary with one house
const rob2 = (nums) => {
    if (nums.length === 1) return nums[0];

    let array = new Array(nums.length);

    array[0] = nums[0];
    array[1] = nums[0] > nums[1] ? nums[0] : nums[1];

    for (let i = 2; i < nums.length; i++) {
        array[i] = array[i - 1] > (nums[i] + array[i - 2]) ? array[i - 1] : (nums[i] + array[i - 2])
    }
    console.log(array)
    return array[array.length - 1];
}

console.log(rob2([1,2,3,1]))

// time complexity O(n) - because


// using comparisons vs the Math.max method may have a slight performance optimization on performance
// be will generally be a negligable amount - Math.max is more widely used for readability

const rob3 = (nums) => {
    if (nums.length === 1) return nums[0];

    let total = new Array(nums.length);

    total[0] = nums[0];
    total[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < nums.length; i++) {
        total[i] = Math.max(total[i - 1], total[i - 2] + nums[i])
    }
    return total[total.length - 1];
}

console.log(rob3([1,2,3,1,1, 7]))
