// 104. Maximum Depth of Binary Tree
// Easy
// Topics
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2


// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100


// use astack for a depth first search
// keep count - create a tuple or set for each
// return 0 if !root

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

const maxDepth = (root) => {
    if (!root) return 0;
    let last = 1;

    const stack = [[root, 1]];

    while(stack.length > 0) {
        let curr = stack.pop();

        curr[0].left
            ? stack.push([curr[0].left, curr[1] + 1])
            : curr[1] > last
                ? last = curr[1]
                : '';
        curr[0].right
            ? stack.push([curr[0].right, curr[1] + 1])
            : curr[1] > last
                ? last = curr[1]
                : '';
    }
    return last;
}


console.log(maxDepth(t1))
