// 111. Minimum Depth of Binary Tree
// Easy
// Topics
// Companies
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5


// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000


/*
Diluted answer to this problem
- Traverse through the search tree level by level, breadth-first search
- keep a count with the level you are on
- if you run into a leaf node, return the count
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


const tree = new TreeNode(3)
tree.right = new TreeNode(20);
tree.left = new TreeNode(9);
tree.right.right = new TreeNode(7);
// tree.right.left = new TreeNode(15);



const minDepth = (root) => {
    if (!root) return 0;

    let res = 0;
    const queue = [root];

    while(queue.length > 0) {
        const levelSize = queue.length;
        res++;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            if (!node.left && !node.right) return res;
            node.left ? queue.push(node.left) : '';
            node.right ? queue.push(node.right) : '';
        }
    }
}

console.log(minDepth(tree))
