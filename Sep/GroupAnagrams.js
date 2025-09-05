/*
input - an array of strings
output - an array of lists of anagrams

nested loops required

cypher = alphebet
{
    eat: ['eat', 'ate', 'tea'],
    bat: ['bat],
    tan: ['tan', 'nat]
}

- make response map
- loop through each string in our array
- create our cyper
- loop through each char in our string
- update the char value at their alphabetical location
- set this cyper as the key
- set value as array
- push string into the array
- return all response values as an array


 */


function groupAnagrams(strs) {
    // create a response hashmap
    const res = {};
    // loop through the strings in the given array
    for (let s of strs) {
        // create a pointer array to help determin if other strings are anagrams.  this array will be filled with zeros, if a character is present we will increase the count
        const count = new Array(26).fill(0);
        // loop through each of the characters withing the current string
        for (let c of s) {
            // Increase the count of the index of the pointer array for the current char
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        // create a key by joinging all elements within the pointer array
        // this key will be exactly the same for any anagrams since we are just documenting which letters are in use
        const key = count.join(',');
        if (!res[key]) {
            // create a key value pair if it does not exist
            res[key] = [];
        }
        // push into the value array that it matches with
        res[key].push(s);
    }
    return Object.values(res);
}


let strs = ["act","pots","tops","cat","stop","hat"]
console.log(groupAnagrams(strs))


// Find the charCode of the current char, then subtrack the charCode at 'a', this will provide you with the index of the current char in the pointer array
console.log('c'.charCodeAt(0) - 'a'.charCodeAt(0))  




var groupAnagrams2 = function(strs) {
    const res = {};

    for (let str of strs) {
        const cypher = new Array(26).fill(0);
        for (let char of str) {
            cypher[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        };
        const key = cypher.join(',')
        if (!res[key]) {
            res[key] = []
        };
        res[key].push(str);
    }
    return Object.values(res);
};