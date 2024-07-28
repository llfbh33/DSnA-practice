// 88. Merge Sorted Array
// Easy
// Topics
// Companies
// Hint
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109


// given sorted arrays in asscending order
// return an array which is sorted in asscending order
// return result should be stored in nums1
// so any 0's within nums1 are place holders
// we are provided with the length

//so we can continualy reduce the elements within nums2 array
// loop through array 1
// keep hold of value at 0 in array 2
// if the value is greater than the current number, loop to the next value in arry one
// if the value is less than or equal to the current number
    // insert it into the array 1 behind the current number
    // then remove that element from array 2
    // then check the next element
// once there are no more elements within array 2
// return array 1

// maybe keep a count on the actual length of arr1 and the count of m.  take the value of

const merge = (arr1, m, arr2, n) => {
    let count = 0
    let curr = arr2[count];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] >= curr || arr1[i] === 0) {
            arr1.splice(i, 0, curr);
            arr2.shift()
            count++;
            curr = arr2[0]
        }
        if (!arr2.length) break;
    }

    count = arr1.length - 1
    while (n > 0) {
        arr1.pop();
        count --;
        n--;
    }
    return arr1
}

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

console.log(merge(nums1, m, nums2, n))
