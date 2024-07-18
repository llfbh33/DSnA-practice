// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


// Create a ListNode class to be able to make a new node list
// this may be a slower way but it is good for practice.  We are going to create a new node list and insert the values in order
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function(list1, list2) {
    let result = new ListNode();
    let current = result;

    let p1 = list1;
    let p2 = list2;

    while (p1 !== null && p2 !== null) { // we will continually change the values of p1 and p2, eventually one or both will move through their lists and hit a null value
        if(p1.val <= p2.val) {  // if the val of the current p1 is less than that of the current p2
            current.next = p1;  // then set that value as the value of our result nodes next
            p1 = p1.next;       // Make sure to set the new value of p1 to that of p1's next, since we have already placed the current value into our results list
        } else {                // else the p2 value is less in which case:
            current.next = p2;  // set the current.next to p2's value
            p2 = p2.next;       // and set the new value of p2 to that of next (we want to move to the next number within the list)
        }
        current = current.next  // before looping through again we want to make sure we are moving through our results list as well so we do not overwrite any input values. Go to the next list we want to add a value to
    };

    if (p1 !== null) {
        current.next = p1;
    } else if (p2 !== null) {
        current.next = p2;
    };

    return result.next;
};

// let list1 = [1,2,4], list2 = [1,3,4]

// console.log(mergeTwoLists(list1, list2))
// the above function and test runs and passes in leetcode however it does not properly work within VS code because I am not properly working the code


const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList = mergeTwoLists(list1, list2);


function printList(node) {
    let current = node;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  printList(mergedList);
