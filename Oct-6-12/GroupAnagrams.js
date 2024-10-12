// 49  Group Anagrams

/*
input - array os strings
output - array of anagram arrays

group together anagrams - words with the same letters
if array contains an empty string return empy string in a nested array

- create a results hashmap
- loop through each word within the strings array
- split the word into an array, sort the char, join back into a string
- if results hashmap contains sorted word, push word into the array
- else set result[cleaned word] to word
return object.values(result)



*/


let strs = ["eat","tea","tan","ate","nat","bat"]

// great example on how to use a hashmap - not how Cory will do it - he will use bucket sort
var groupAnagrams = function(strs) {
    let result = {};                                                            // create a hashmap

    for (let word of strs) {                                                    // loop through each word
        let sorted = word.split('').sort().join('');                            // sort the characters of the word
        result[sorted] ? result[sorted].push(word) : result[sorted] = [word];   // set key to sorted, set value to word, or push new word into value
    }

    return Object.values(result);                                               // return array of array values
};


console.log(groupAnagrams(strs))


// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)



const groupAnagrams2 = (strs) => {
    let map = {};

    for (let str of strs) {
        // Create a frequency count array of size 26 for each letter in the alphabet
        let count = new Array(26).fill(0);

        // Increment the count for each character in the string
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // Use the frequency count array as the key (we convert it to a string to use as a key)
        let key = count.join('#');  // '#' used to separate counts for uniqueness

        // If the key doesn't exist, create a new array
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }

    // Return all the grouped anagrams
    return Object.values(map);
}


// time complexity O(n * m) - n = number of strings, m is the average length of each string
    // it is n * m with m being the average length of the string because we can not be sure
    // that each string is the same length, so be can not be sure that the time will be constant


// space complexity O(n * m)
    // - for each string, create the frequency array in O(m) time (just counting char)
    // - frequency array is of fixed size 26 so operations like joining array into a string key take constant time
