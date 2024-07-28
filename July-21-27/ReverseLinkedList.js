// 206. Reverse Linked List
// Easy
// Topics
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.



// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []


// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000


// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


class ListNode {
    constructor(val = 0, next = null) {        // the value is 0 unless otherwise defined, next is null unless otherwise defined
        this.val = val;
        this.next = next;
    }
}

// create a pointer for the first node
// create a stack, while there is a node.next add it to the stack
// now we have a full stack with all the nodes
// with the pointer for the first node, add the current on the stack as the current on the
// so the reasoning for making a pointer is because if you walk your way through the linked list then you can not return and those nodes are now dead nodes
const reverseList = (head) => {
    let last = head;
    let stack = [];

    while (last) {
        stack.push(last);
        last = last.next
    }

    head = stack.pop();
    let current = head;  // need to set current's value to head down here 

    while (stack.length) {
        let curr = stack.pop();
        current.next = curr;
        current = current.next;
        if (!stack.length) {
            current.next = null
        }
    }
    return head;
}


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(reverseList(head))
