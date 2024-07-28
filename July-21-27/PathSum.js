// 112. Path Sum
// Easy
// Topics
// Companies
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.



// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.


// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000


// This is an iterative tacktic to slve the problem using a depth first search and a stack
// a stack is important when using a depth first search as it implements the first in last out approach
// even though it will start out taking both the left and the right it is okay because we will be returning to the sides we are not checking in the future
// this function has a time complexity of O(n) due to the while loop, the space complexity will also be O(n)?  becuase the stack will only be as big as the input node? a set max size
var hasPathSum = function(root, targetSum) {
    if (!root) return false;                        // return false if there are no nodes within root, necessary as we are setting up the stack with the first node and we will run into errors without making a stop on a situation like that

    let current = root;                             // make a pointer for the current node
    let stack = [[current, 0]];                     // add the first node to the stack with a counter set to zero

    while (stack.length) {                          // while there are values on the stack
        let curr = stack.pop();                     // we are going to pop off the one on the top to look at
        let sum = curr[0].val + curr[1]             // set the sum counter to that of curr's second value plus the value of the curr node (the value of the node plus the values of all the parent nodes)

        if (!curr[0].left && !curr[0].right) {      // if the node we are looking at does not have a left or a right it is a leaf node
            if (sum === targetSum) {                // then we want to check its value against the target sum
                return true                         // and return true if they match
            }
        } else {                                    // else the curr node is not a leaf node and
            if (curr[0].right) {                    // we want to check if it has a right node
                stack.push([curr[0].right, sum])    // if so we push it to the stack along with the current sum which is the sum of all of the right nodes parent node values
            }
            if (curr[0].left) {                     // we want to check if it has a left node
                stack.push([curr[0].left, sum])     // if so we push it to the stack along with the current sum which is the sum of all of the right nodes parent node values
            }
        }
    }
    return false;                                   // if we do not hit the return true section then we have checked every leaf node within the tree and do not have a match, so we return false
};



// recursive
// found this answer within leetcode - it is a much simpiler way.  I wonder how the speed is though

const hasPathSum2 = (root, target) => {

    if (!root) {                                        // we will be working through the roots, so if we get to the point where there is no more then the sum will not match the target and we return false
        return false;
    };
    if (root.val === target && (!root.left && !root.right)) {       // if the root value is equal to that of the target and it is a leaf node we return true, becuase we reduce the value of the target with each recursive call
        return true
    };

    return hasPathSum2(root.left, target - root.val) || hasPathSum2(root.right, target - root.val)   // if there is a left or a right node then reduce the target by the value of the current node and recurse with the next node and new target value
}




class ListNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// an example test node list tree for testing functions
const list = new ListNode(5);
list.left = new ListNode(4);
list.right = new ListNode(8);
list.left.left = new ListNode(11);
list.left.left.left = new ListNode(7);
list.left.left.right = new ListNode(2);
list.right.left = new ListNode(13);
list.right.right = new ListNode(4);
list.right.right.right = new ListNode(1);


console.log(hasPathSum2(list, 22))
console.log(hasPathSum(list, 22))
