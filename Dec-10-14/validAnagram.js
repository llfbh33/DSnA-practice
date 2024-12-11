// 242. Valid Anagram
// Solved
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false



// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

const validAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let sMap = {};
    let tMap = {};
    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
        tMap[t[i]] = (tMap[t[i]] || 0) + 1;
    }
    for (let key in sMap) {
        if (sMap[key] !== tMap[key]) return false;
    }
    return true;
}
// Time complexity: O(n)
// Space complexity: O(n)
