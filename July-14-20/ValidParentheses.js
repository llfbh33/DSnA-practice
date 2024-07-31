// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// I could set each character to a number, and each opposite char to the corresponding negitive number and if the value of adding all the char values is equal to 0 then the string is true
// Things to look out for with this approach
    // All brackets opening and cloasing need to be in the proper order, so the numbers would have to be calculated accordingly

let trueTest = '[ ]{ } ( { } )';
let falseTest = '[ ] { ( } { } )';  // with my current approach this would come out true

// What if we kept track of the amount of different types of brackets within an object
// we could increase and decrease their amount

let trueTest2 = '[ ( ] ( { } ))';  // if there is any value which is an odd number that is not the character you are working with, you can not close
let obj = {
    '[': 0,
    '{': 0,
    '(': 0
};
obj['['] = 1;
obj['('] = 1;

obj['['] = 0;


let falseTest2 = '[ ] { ( } { } )';





// We can make sure that the brackets are in the correct locations by checking to make sure that no bracket is closing against another which is opening that is not its match
const isValid = (s) => {
    let result = 0;
    let obj = {
        '[': 1,
        ']': -1,
        '{': 2,
        '}': -2,
        '(': 3,
        ')': -3
    }

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] > 0                           // check that the value of the char at i has a positive value - that the brackets are opening
            && obj[s[i + 1]] < 0                    // check that the value of the next xhar has a negitive value - that the brackets are closing
            && obj[s[i + 1]] + obj[s[i]] !== 0      // Make sure that the two char are not corresponsing char
        ) return false;

        result += obj[s[i]];
        if (result < 0) return false;
    }
    if (result === 0) return true;
    else return false;
    // let negCount = 1;

    // let array = s.split('').map(char => obj[char])
    // // let positive = array.filter(num => num > 0);
    // // let negitive = array.filter(num => num < 0);

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] < 0 && array[i - negCount] + array[i] === 0) {
    //         negCount++;
    //         result += array[i];
    //     } else if (array[i] > 0) {
    //         result+= array[i];
    //         negCount = 1;
    //     }
    // }

    // return array
};

// console.log(isValid("[(({()}){()})]"))


// I attempted to come up with a solution on my own,  now I am going to review some results.  See if my thought process had any merrit
    // if It did i will try to implement the help into my solution as well as work to understand the other ways people thought to tackle this problem
    // If it did not then I will work to understand the throught process of others and the tools used to create a solution


// We could create a hash map.  - similar to what I did with creating an object, except make the values of the open parentheses be the closed parentheses


// Okay, I was definitly on the right track,  I could just work on having a more optimal way to go about working through my solutions
// - want to check to make sure that when you are closing parentheses they match up
// But instead of saving the char as number values we could save them as keys to their inverse
// We could keep a stack variable open
// as we loop through and check each char, if the char is an open parentheses we put it on the stack, similar to a programing stack
        // We will not be able to close out a pairing of parentheses untill all the parenthes pairs above it have been remove
// if we run into a closed parentheses we check if the last char on the stack is its open pair
// if it is not then return false
// if it is then remove the open parentheses from the stack and move on to the next char in the string


const map = {
    ']': '[',
    '}': '{',
    ')': '('
}

const pairs = (str) => {
    let stack = [];                                             // created a stack

    for (let i = 0; i < str.length; i++) {                      // loop through each char
        if (Object.values(map).includes(str[i])) {              // check to see if the current char is located within the values (all opening parentheses are in the values)
            stack.push(str[i]);                                 // if it is push it on the stack
        } else if (stack[stack.length - 1] === map[str[i]]) {   // else then it will be a closed parentheses which we stored as keys so we can compare the top of the stack with the corresponding opening parentheses of current char
            stack.pop();                                        // it they match then we pop them off the stack
        } else {                                                // else we have mismatching going on and
            return false;                                       // we can return false
        }
    }
    if (!stack.length) return true;                             // make sure to check that the stack is empty first
    else return false;                                          // if it is not empty then not all the parentheses have closed, so the return is false
}


console.log(pairs("[([])]"))
