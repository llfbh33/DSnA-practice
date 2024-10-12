// 238 - Product of Array Except Self

/*
input - array
output - array

- create a result array
- create a copy of nums
- create a loop at length of nums
- set numsCopy[i] = 1
- reduce multiply and push value to result array
- set numsCopy[i] = nums[i]
- return result array


*/


const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(sum);  // Output: 10


console.log(sum / 3)


const productExceptSelf = (nums) => {
    const result = [];
    const product = nums.reduce((acc, curr) => acc * curr, 1);

    for (let i = 0; i < nums.length; i++) {
        console.log(product)
        result.push(product / nums[i]);
    }
    return result;
};

let nums = [-1,1,0,-3,3]

console.log(productExceptSelf(numbers))
console.log(productExceptSelf(nums))
