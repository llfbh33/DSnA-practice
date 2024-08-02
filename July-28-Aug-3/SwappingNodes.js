// 1721. Swapping Nodes in a Linked List
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 105
// 0 <= Node.val <= 100

// my solution - O(n) time complexity
// though it is O(n) it is much much slower than the other answers
// I think the reasoning for this is that when you change a value of a node It still retains its place and other nodes memory of it within the list
// however I was thinking that they did not, in which case I was completly rewriting the nodelist
// All that needed to be done was to exchange the values of the two like I was doing within the array
var swapNodes = function(head, k) {

    if (!head.next) return head;
    let exchange = [head.val];
    let current = head;

    while (current.next) {
        current = current.next;
        exchange.push(current.val)
    };

    let temp = exchange[k - 1];
    exchange[k - 1] = exchange[exchange.length - k]
    exchange[exchange.length - k] = temp;

    console.log(exchange)   //

    let adjust = head;

    for (let i = 0; i <= exchange.length - 1; i++) {
        adjust.val = exchange[i]
        adjust = adjust.next
    }
    return head;
};


// this is a more simplified version where the values are exchanged and speeds up the function run time

var swapNodes = function(head, k) {
    let A = head, B = head, K, temp
    for (let i = 1; i < k; i++) A = A.next
    K = A, A = A.next
    while (A) A = A.next, B = B.next
    temp = K.val, K.val = B.val, B.val = temp
    return head
};
