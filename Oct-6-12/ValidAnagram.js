
// check string length
 // create a hashmap and track all chars within first string
 // loop through string two
 // for each char, if it doesn't exist in the hashmap, return false
 // if it does, reduce the value of that char in the map
 // return true



 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let map = {};

    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }

    for (let j = 0; j < t.length; j++) {
        if (map[t[j]]) map[t[j]]--;
        else return false;
    }
    return true;
};


// Space and time complexity if O(n)
    /*
    We are only searching through s and t once so the time complexity will be
    O(s+t) which can be rewritten as O(n+n) which can be reduced to o(n)
    Space complexity will also be O(n) because we will only be taking up s
    space within the hashmap
    */
