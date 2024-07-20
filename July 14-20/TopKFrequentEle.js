// good approach to remember - will be helpful in the coming weeks

let cat = ["eat","tea","tan","ate","nat","bat"];
let nums = [1, 1, 1, 2, 2, 2, 3, 3, 4]

const topkFrequent = (nums, k) => {
	let buckets = new Array(nums.length);               // (space O(n))
	let counts = {};                                    // (space O(n))
	let res = [];                                       // (space O(n))
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		counts[num] ? counts[num] += 1 : counts[num] = 1
	}

	for (let num in counts) {                       // loop through the keys of the object using in / can not use of on an object
		let count = counts[num];                    // count is the value of the current key
		if (!buckets[count]) {                      // if there is no value at the location of count as a key in buckets ex. buckets[3] = null
			buckets[count] = []                     // then set the value to an empty array
		} buckets[count].push(num)                    // if there is a value, then there is already an array and we are going to push the num into the curr array
	}
    // console.log(buckets)                            // now our buckets are holding ['4'] at idx 1, ['3'] at idx 2, and ['1', '2'] at idx 3

	let copyK = k;                                          // create a copy of our target number of k
	for (let j = buckets.length - 1; j >= 0; j-- ) {        // loop through the bucket from last to first
		if (buckets[j]) {                                   // if there is a value at the current index of buckets
			for (let q = 0; q < buckets[j].length; q++) {   // then loop through the keys value
				let item = buckets[j][q];                   // let item be the single current element of the buckets at curr keys value
				res.push(item);                             // push the element into our result
                if (res.length >= k) return res
				copyK--;
			}
		}
        if (res.length >= k) return res
	}
    return res;
}

// console.log(topkFrequent(nums, 2))


const frequentK = (nums, k) => {
    let counts = {};
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        counts[num] ? counts[num] += 1 : counts[num] = 1;
    };

    while (k > 0) {
        let max = Math.max(...Object.values(counts));
        let idx = Object.values(counts).indexOf(max);
        let num = Object.keys(counts)[idx];
        res.push(num);
        delete counts[num];
        k --;
    }
    return res;
}


console.log(frequentK(nums, 2))
