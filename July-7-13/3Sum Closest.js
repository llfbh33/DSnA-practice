// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.



// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).


// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

const helper = (one, two, three, target) => {
    if (target < 0) target *= -1;
    let sum = (one + two + three) - target;
    if (sum < 0) sum *= -1;
    return sum;
}

// I would assume that the best way to keep track would be to hold the first itteration of 3, if a new value is found, then start on the next
var threeSumClosest = function(nums, target) {
    let result = []
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) { // We want to start checking the first number at index zero, and stop index zero from checking the same numbers, meaning the last tw
        if (i > 0 && i < nums.length - 3 && nums[i] === nums[i + 1]) {
            continue;
        }
        // console.log(i)
        let j = i + 1;   // we want to keep an eye on the second number that will be added which will be the one right after the first
        let k = nums.length - 1   // set k to the last indice of nums, this way we can work from both sides of the array to the middle
        while(j < k) {    // want to make sure that j and k do not overlap each other so we are not counting the same numbers

            if (nums[i] + nums[j] + nums[k] === target) return target;  // we can assume that if we hit the target that that is the answer as it is the closest sum
            if (!result.length) {
                result = [nums[i], nums[j], nums[k]];
                // console.log(result.reduce((partialSum, a) => partialSum + a, 0))
            } else {
                let gaugeNums = helper(nums[i], nums[j], nums[k], target);
                let gaugeResult = helper(result[0], result[1], result[2], target);
                // console.log(gaugeNums, gaugeResult)
                if (gaugeNums < gaugeResult) result = [nums[i], nums[j], nums[k]];
                // console.log('newResult', result)
            }
            while(j < k && nums[j] === nums[j + 1]) j++;
            while(j < k && nums[k] === nums[k - 1]) k--;
            j++;
            k--;

        }
    }
    return result.reduce((partialSum, a) => partialSum + a, 0);

};


const test = [-1,2,1,-4]
const test2 = [1, 1, 1, 0]
const test3 = [833,736,953,-584,-448,207,128,-445,126,248,871,860,333,-899,463,488,-50,-331,903,575,265,162,-733,648,678,549,579,-172,-897,562,-503,-508,858,259,-347,-162,-505,-694,300,-40,-147,383,-221,-28,-699,36,-229,960,317,-585,879,406,2,409,-393,-934,67,71,-312,787,161,514,865,60,555,843,-725,-966,-352,862,821,803,-835,-635,476,-704,-78,393,212,767,-833,543,923,-993,274,-839,389,447,741,999,-87,599,-349,-515,-553,-14,-421,-294,-204,-713,497,168,337,-345,-948,145,625,901,34,-306,-546,-536,332,-467,-729,229,-170,-915,407,450,159,-385,163,-420,58,869,308,-494,367,-33,205,-823,-869,478,-238,-375,352,113,-741,-970,-990,802,-173,-977,464,-801,-408,-77,694,-58,-796,-599,-918,643,-651,-555,864,-274,534,211,-910,815,-102,24,-461,-146]
console.log(threeSumClosest(test3, -7111))
// console.log(-10 + -10 + -10)
// console.log(-2960 - -7111)
