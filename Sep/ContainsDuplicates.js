// input - array of numbers
// output - boolean
// if duplicate exists return true
// else return false
// do not have to check every number
// do have to check in a bit of a hash format
// compare first number to second, if no, third, if no, fourth until last number
// compare second number to third
// this is an easy solution which works well with small arrays however once 
// we start to deal with extreamly large arrays it will cause issues with timing
// use a set, no duplicates can be added to a set so you only need one loop
// one good question for this problem would be 
// 'do we have a max or average length of arrays that will be used?  or is the length variable?'
// if the length is variable or at very least it is not certain that the array will be shorter
// we will want to use a set version or something similar
// If we know the arrays will stay on the smaller side we could use something like this:
// return new Set(nums).size < nums.length;
// we would only use the .size method with smaller arrays as we will always be adding all 
// numbers into the set no matter the size with this method first, before checking the size
// it is important for keeping time and space to a minimum.  our other set option
// does not necessarially need to add all the numbers from the array or even look at them all.


// for both:
// Time complexity: Object(n)
// Space complexity: Object(n)


function hasDuplicate(nums) {
    const nonDuplicates = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nonDuplicates.has(nums[i])) {
            return true;
        } else {
            nonDuplicates.add(nums[i])
        }
    }
    return false;
}

function hasDuplicate2(nums) {
    return new Set(nums).size < nums.length;
}