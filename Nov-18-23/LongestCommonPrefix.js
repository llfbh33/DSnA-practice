var longestCommonPrefix = function(strs) {
    let res = "";

    for (let i = 0; i < strs[0].length; i++) {
        let string = `${strs[0][i]}`;
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== string){
                return res;
            }
        }
        res += string;
    }
    return res;
};
