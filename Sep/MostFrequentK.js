
const nums = [1, 2, 2, 3, 3, 3, 3];
const buckets = new Array(nums.length + 1).fill([]);

// we want to find the min and the max, the difference will give us the range of buckets, 
// this way we can enter each into the bucket of its value

/* 

{
    1: 1,
    2: 2,
    3: 4
}

*/


function topKFrequent(nums, k) {
    const map = {};
    for (let num of nums) {
        map[num] ? map[num] += 1 : map[num] = 1;
    };

    const buckets = new Array(nums.length + 1).fill().map(() => []);  // necessary to map or each number is pushed into all arrays
    for (let num in map) {  // in with an object provides the keys
        let count = map[num];
        buckets[count].push(Number(num));
    };

    const sorted = buckets.flat();  // need to flaten out the nested buckets
    return sorted.slice(sorted.length - k, sorted.length)
}

console.log(topKFrequent(nums, 3))