/*
- When running through a coding challenge, work on the planning step, then work on the execusion step
- Execution step is walking your interviewer through an example and the Big O complexity

- Do not commit to half baked approaches or a thought without a plan

- Problems - Array problems: Two Sum, Valid Anagram, Contains Duplicate

- This week is about using hashMaps
    - provide fast access to data with a time of O(1) for traversing, insertion, and deletion
    - anagram grouping, two sum,

*/


let obj = {
    cat: 0,
    dog: 3
}

let obj2 = {
    cat: 0,
    dog: 3
}

const check = (one, two) => {

    for (let value in one) {
        if (one[value] !== two[value]) return false;
    }
    return true;
}

console.log(obj.dog ? true : false)

// console.log(...obj === [...obj2])
