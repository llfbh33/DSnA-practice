// utilizing bucket sort

const mostFrequentK = (arr, k) => {
    const bucket = new Array(arr.length + 1);
    const counts = {};
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        counts[curr] ? counts[curr]++ : counts[curr] = 1;
    }

    for (let num in counts) {  // gives us the key
        let count = counts[num];    // gives us the value
        if (!bucket[count]) {   // checks the bucket at the index which corresponds with the value
            bucket[count] = []; // if it doesn't exist yet we need to add an array
        }
        bucket[count].push(num);  // then push the number into the array
    }

    for (let i = bucket.length - 1; i >= 0; i--) {      // loop backwards through the bucket
        if (bucket[i]) {                                // if a value exists at that index
            for (let j = 0; j < bucket[i].length; j++) {    // then push up to k values into the return array
                if (k === 0) return res;
                res.push(bucket[i][j]);
                k--;
            }
        }
    }
    return res;
}
