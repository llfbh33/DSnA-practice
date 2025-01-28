// 98. Validate Binary Search Tree
// Medium
// Topics
// Companies
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.


// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}



const isValidBST = (root) => {
    if (!root) return true;

    const queue = [root];

    while(queue.length > 0) {
        console.log(queue)
        const node = queue.shift();

        if (node.left) {
            if (node.left.val >= node.val) return false;
            if (node.left.val !== null) queue.push(node.left);
        }

        if (node.right) {
            if (node.right.val <= node.val) return false;
            if (node.right.val !== null) queue.push(node.right);
        }
    }
    return true;
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.left.left = new TreeNode(null);
root.left.right = new TreeNode(null);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(7);


console.log(isValidBST(root)) // true
