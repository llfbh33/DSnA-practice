// 2. Add Two Numbers
// Medium
// Topics
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


// goals - whiteboard first without coding
// double check whiteboarding before continuing
// then code and walkthrough solution again before testing
// if problem go back to whiteboarding unless solution is obvious

// linked lists
// input - two linked lists
// output - a single different linked list

// linked lists are not always the same length, but the first linked node on each list is added together
// if there is a node at next of one and not the other, continue and add on any previous number
// may have a previous number

// keep a prev num variable which = 0
// create a new linked list with a null val
// create a variable to hold the new linked list
// create a while loop that ends if l1 and l2 vals are null
    // add both values and prev num - 8
    // set prev num to 0
    // if num is greater than or equal to 10 - not
        // then modulo 10 - gives the first diget of the num -
        // set the modulo value as the new linmked list val -
        // Math.floor(num / 10) - and set this as the prev value - this will be the remaining tens place in an added number format after the first diget is removed
    // else set the value to the new linked list val
    // set curr to curr.next for all linked lists
// if prev num > 0 then set it to new linked list.next
// return the original new linked list (use the variable linked list for the loop)






const addTwoNumbers = (l1, l2) => {
    

}


































































var addTwoNumbers2 = function(l1, l2) {
    let returnList = [];
    let remainder = 0;
    let longest;
    if (l1.length >= l2.length) longets = l1;
    else longest = l2;

    for (let i = 0; i < longest.length; i++) {
        let result = l1[i] + l2[i];
        if (remainder > 0) result += remainder
        remainder = 0;
        if (result >= 10) {
            result -= 10;
            remainder = 1
        }
        returnList.push(result)
    }
    if (remainder > 0) {
        returnList.push(remainder)
    }
    return returnList
};
