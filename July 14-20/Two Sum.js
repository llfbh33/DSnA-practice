// good approach to remember - will be helpful in the coming weeks

let cat = ["eat","tea","tan","ate","nat","bat"];

const sorting = (arr) => {
    for (let ele of arr) {
        ele.split().sort().join()
        console.log(ele)
    }
    return arr;
}

console.log(sorting(cat))
