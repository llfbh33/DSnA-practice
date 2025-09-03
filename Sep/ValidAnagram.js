    // input - two strings
    // output - boolean
    // I think the correct option here would be a hashmap,  I am curious though if you could do 
    // the same thing with removing letters from each one at a time
    // wouldn't that save time and space as you do not have to store all the letters of one
    // string in the hash map then start on the other?
    // you would be using a loop if you used a map or updated the strings\
    // we would be using a lot of the splicing method which would take up a lot more ...memory?  time?
    // space becuase we are creating a new string every time we update it and in this 
    // case I would have to make a new string for both, or turn them into arrays and remove letters one by one 
    // so actually yes, using a hashmap is better


    function isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let hashMap = {};

        // make a loop to add all the char from the first string to the map
        for (let i = 0; i < s.length; i++) {
            const curr = s[i]
            hashMap[curr] ? hashMap[curr] += 1 : hashMap[curr] = 1;
        };

        // loop through string t, check our hashmap
        for (let i = 0; i < t.length; i++) {
        // if char doesn't exist, return, if it does and is 0, return, if value, reduce value
            const curr = t[i];
            if (hashMap[curr] && hashMap[curr] > 0) {
                hashMap[curr] -= 1;
            } else {
                return false;
            }
        };

        return true;
    }