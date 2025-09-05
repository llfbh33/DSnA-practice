


function groupAnagrams(strs) {
    // create a response hashmap
    const res = {};
    // loop through the strings in the given array
    for (let s of strs) {
        // create a pointer array to help determin if other strings are anagrams.  this array will be filled with zeros, if a character is present we will increase the count
        const count = new Array(26).fill(0);
        // loop through each of the characters withing the current string
        for (let c of s) {
            // 
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const key = count.join(',');
        console.log('key', key)
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(s);
    }
    return Object.values(res);
}


let strs = ["act","pots","tops","cat","stop","hat"]
console.log(groupAnagrams(strs))

console.log('c'.charCodeAt(0) - 'a'.charCodeAt(0))