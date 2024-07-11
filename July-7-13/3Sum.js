
// online
var threeSum1 = function(nums) {
    let result = [];
    nums =  nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
       let j = i + 1;
       let k = nums.length - 1;

       while (j < k) {
        let sum = nums[i] + nums[j] + nums[k]
        if (sum === 0) {
            result.push([nums[i], nums[j], nums[k]])

            while(nums[j] === nums[j + 1]) j++;
            while(nums[k] === nums[k + 1]) k--;
            j++;
            k--;
        } else if (sum < 0) {
            j++;
        } else {
            k--;
        }
       }
    }
    return result;  // [ [ -1, -1, 2 ], [ -1, 0, 1 ], [ -1, 0, 1 ] ]  has a duplicate
};

const numbers = [-1,0,1,2,-1,-4]

console.log(threeSum1(numbers))



// takes to much time
var threeSum2 = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let result = [];
    const duplicates = [];

    for (let i = 0; i < nums.length -2; i++) { - 3
        for (let k = i + 1; k < nums.length - 1; k++) { - 1
            for (let q = k + 1; q < nums.length; q++) {
                if (nums[i] + nums[k] + nums[q] === 0 && !duplicates.includes(`${nums[i]}${nums[k]}${nums[q]}`)) {
                    result.push([nums[i], nums[k], nums[q]]);
                    duplicates.push(`${nums[i]}${nums[k]}${nums[q]}`)
                }
            }
        }
    }
    return result;
};



var threeSum = function(nums) {
    // sort the numbers so they are in order from smallest to largest
    // nums = nums.sort((a, b) => a - b);  // sorting is neccessary if you want to make sure not to duplicate array entries
    // create an array to hold results
    let result = [];

    // loop through the array to find the first of the triplicate numbers, stop 3 before length to leave space for the last 2 nums of triplicate
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { // will not hit on the first itteration, will skip itterations where nums[i] is the same as the next number in line
            continue; // Skip duplicate elements
        }
        let left = i + 1;  // set a variable to find the second triplicate num, set as an index of the array
        let right = nums.length - 1;  // set a variable to find the third triplicate num as the last num of the array, set as an index of the array

        while (left < right) {  // while the left indice is less than that of the right
            const sum = nums[i] + nums[left] + nums[right];  // add up the values of the numbers at the three indices

            if (sum === 0) {    // check if that sum is 0
                result.push([nums[i], nums[left], nums[right]]);    // if it is, add it to the result array
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate numbers if there are any to the right of the left indice
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates numbers if there are any to the left of the right indice
                left++; // increment the left indice to check on a new number
                right--; // decrement the right indice to check on a new number
            } else if (sum < 0) { // since sorting the array, can assume that if sum is less than 0, we need a larger number to add
                left++;         // so we would increment the left indice
            } else {            // else sum would be greater than 0, which would mean we need a smaller number
                right--;        // so we would decrement the right indice
            }
        }
    }
    return result;
};

let test = [1,2,-2,-1]
let test1 = [0,-4,-1,-4,-2,-3,2]
let test3 = [-1,0,1,2,-1,-4,-2,-3,3,0,4]


console.log(threeSum(numbers))
