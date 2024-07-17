// I think it would be best to trim the incoming string to remove any possible spaces from the end
// Then locate the index of the last space
// then subtract that index from the length - 1

var lengthOfLastWord = function(s) {
    let trim = s.trim();
    let length = trim.length - 1
    let idx = trim.lastIndexOf(' ');
    return  length - idx;
};


s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s))
