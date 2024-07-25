// 26. Remove Duplicates from Sorted Array
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.



// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.


// all arrays given will besorted in assending order [0, 1, 2]
// in this problem they want you to adjust the original array - and only return the count of the length

// loop through the whole array
// make a variable x that stores the value of the current num if the current value is different from the current num
// if they are the same then skip to the next number
// if they are different, make the new value of x be that number and add the value to a new array

const sorting = (nums) => {
    let x = nums[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        let currNum = nums[i];
        if (currNum === x) {
            nums.splice(i, 1)
        } else {
            x = currNum;
        }
    }
    return nums.length;
}

let nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
console.log(sorting(nums))

// an alternate online solution
var removeDuplicates = function(ar) {
    let n = ar.length;
    let i = 0, k = 0;

    for(let i = 0; i < n; i++)
        if(ar[i] > ar[k])
            ar[++k] = ar[i];

    return k+1;
};

console.log(removeDuplicates(nums))




// Remove all elements with the same value as val and return the length of the array excluding any of that number

var removeElement = function(nums, val) {

    for (let i = nums.length - 1; i >= 0; i--) {    // loop through the array backwards O(n) time for the loop
        if (nums[i] === val) {                      // check if the current num matches val
            nums[i] = nums[nums.length - 1];        // if they match then change the value of the current num to that of the last num O(1) space and time complexity
            nums.pop();                             // Then remove the last element from the array O(1) space and time complexity
        }
    }
    return nums.length
};

console.log(removeElement(nums, 2))
