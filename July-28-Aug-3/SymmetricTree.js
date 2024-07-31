// 101. Symmetric Tree
// Easy
// Topics
// Companies
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100



// this could be done recursivly
// save the left and the right
// return the comparison if they are the same
    // also return a call to the same function with the left node
    // also return a call to the same function with the right node
// make stop gaps at the top
    // if no left and right, return true
    // if there is no left or right return false


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const t1 = new TreeNode(1)
t1.left = new TreeNode(2)
t1.right = new TreeNode(2)
t1.left.left = new TreeNode(3)
t1.left.right = new TreeNode(4)
t1.right.left = new TreeNode(4)
t1.right.right = new TreeNode(3)

// came up with this solution and it does work.  However it is one of the slowest solutions on Leetcode
// is is an O(n) space complexity
const isSymmetric = (root) => {
    const node = root;
    if (!node.left && !node.right) return true;
    if (!node.left || !node.right) return false;

    const q = [[node.left, node.right]];

    while(q.length) {
        const curr = q.pop();
        if (curr[0].val !== curr[1].val) return false;

        if (curr[0].left || curr[1].right) {
            q.push([curr[0].left || 'n', curr[1].right || 'n'])
        }
        if (curr[0].right || curr[1].left) {
            q.push([curr[0].right || 'n', curr[1].left || 'n'])
        }
    }
    return true;
}

console.log(isSymmetric(t1))
