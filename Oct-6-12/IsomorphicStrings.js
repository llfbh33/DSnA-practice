// 205. Isomorphic Strings

/*
input - two strings
output - boolean

- both strings can be copys of each other
- each character can map to any character which is not yet taken

- create a map
- create a set
- loop through strings
- add s char with value of t char -
    - if set has t char return false, else, add t char to set
- if s char exists and is not t char - return false
- return true

{g: d}
(d)
3
false
*/


const isIsomorphic = (s, t) => {
    let map = {};
    let tSring = new Set();

    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];

        if (map[sChar]) {
            if (map[sChar] !== tChar) return false;
        } else {
            map[sChar] = tChar;
            if (tSring.has(tChar)) return false;
            tSring.add(tChar);
        }
    }
    return true;
}


// time and space complexity of O(n)

/*
n is the length of the input strings
time complexity - O(s + t) => O(n + n) => O(n)
space complexity - worst case will only have stoage of s + t / O(s + t) => O(n + n) +> O(n)
*/
