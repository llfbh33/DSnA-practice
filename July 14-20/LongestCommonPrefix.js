// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.


// We are looking to see how many of the first letters in each element match up and are the same
// if there are none return an empty string
// Set up 2 variables
// assign these two variables to the first string and the next string
// continue to reduce down the size of the first string until you find a prefix which matches every string


let example = ["dog","racecar","car"];
let example2 = ["flower","flow","flight"]



const longestCommonPrefix = (strs) => {
    let first = strs[0];                    // grab the first string element of the array
    if (strs.length === 1) return first;    // if there is only one element in the array then the whole first string will be the prefix, else there will be more than one element

    for (let i = 1; i < strs.length; i++) {  // create a loop to loop through each string besides the first string

        let next = strs[i];                     // create a next variable to hold the current string we are going to compare

        for (let j = 0; j <= first.length; j++) {   // loop through the size of the first variable
            if (first[j] !== next[j]) {             // if we run into a letter that does not match, then we can reduce the size of the first variable
                first = first.slice(0, j)           // set the first variable to be the sliced amount
                break;                          // adding break here will avoid unecessary comparisons and increase profficiency of the function
            }
        }
    }
    return first;
};


const longestCommonPrefix2 = (strs) => {
    let result = '';
    let min = Math.min(...strs.map(str => str.length)); // here we are finding the length of the shortest string as a way to reduce the amount of comparisons made - similar to what I did with setting the length to first

    for (let i = 0; i < min; i++) {
        let char = strs[0][i];                          // here we isolate the first string, and look at each character individually
        if (strs.every(str => str[i] === char)) {       // if every other element in the array has the same matching letter
            result += char;                             // then add that letter to result
        } else break;                                   // if they don't match, leave the loop we have found all the matching letters
    }
    return result;                                      // return the founded result
}

// console.log(longestCommonPrefix2(example2))
