// 217 Contains Duplicate

/*
input - array of numbers
output - boolean

nums will have atleast a length of 1

// set a condition to return false if the length is 1
// create a map
// for each number, save the num with a value of one if it doesn't exist
// if it does exist, return true
// return false

*/



const containsDuplicate = (nums) => {
    if (nums.length <= 1) return false;
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (map[num]) return true;
        else map[num] = 1;
    }
    return false;
}


// time and space complexity of O(n)

/*
time complexity - we are only going to look at each element of the array up to n times
space complexity - worst case, will only be storing n amount of elements in the hash map
*/
