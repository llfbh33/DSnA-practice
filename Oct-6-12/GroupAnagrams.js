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
