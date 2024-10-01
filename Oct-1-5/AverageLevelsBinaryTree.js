// 637. Average of Levels in Binary Tree
// Easy
// Topics
// Companies
// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.


// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
// Example 2:


// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]


// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1


// things to think about:
    /* Average is the total sum of a set of numbers divided by the amount of numbers
    The decimal place will be up to 5 characters, what methods can i use to accomplish this
    toFixed(num) will round up the number to the provided decimal place*/

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
    tree.right.left = new TreeNode(15);


const averageOfLevels = (root) => {
    if (!root) return [];

    const results = [];
    const queue = [root];

    while(queue.length > 0) {
        const levelSize = queue.length;
        let sum = 0;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            sum += node.val;

            node.left ? queue.push(node.left) : '';
            node.right ? queue.push(node.right) : '';
        }
        results.push(sum / levelSize);
    }
    return results;
}


console.log(averageOfLevels(tree))
