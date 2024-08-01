// 125. Valid Palindrome
// Solved
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


// first we use regex to remove all non alphanumeric characters
// return true if there is no value to this new string
// create a pointer for the first char and the last char
// while the pointers do not equal each other
    // check if they do not match and return false
    // else increase and decrease the pointers
// return true if the while loop is exited before returning
// O(n) space time - only one loop
var isPalindrome = function(s) {
    let newS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (!newS) return true;

    let first = 0;
    let last = newS.length - 1;

    while (first < last) {
        if (newS[first] !== newS[last]) return false;
        first++;
        last--;
    }
    return true
};
