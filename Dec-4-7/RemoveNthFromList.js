// 19. Remove Nth Node From End of List
// Attempted
// Medium
// Topics
// Companies
// Hint
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 

// Follow up: Could you do this in one pass?


//my solution
var removeNthFromEnd = function(head, n) {
    if (head.next === null && n === 1) {
        head = null
        return head
    }

    let pointer = head;
    let current = head;

    for (let i = 1; i <= n; i++) {
        if (current.next) current = current.next
    };

    while (current.next !== null) {
        current = current.next;
        pointer = pointer.next;
    };

    let adjust = pointer.next.next;
    pointer.next = adjust;

    return head;
    
};


// copilot solution
const removeNthFromEnd = (head, n) => {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;

    }
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
        
    }