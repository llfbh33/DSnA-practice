
// 100. Same Tree
// Easy
// Topics
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104


// working with node values

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}


let tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(3)

let tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(3)

let tree3 = new TreeNode(1)
tree3.left = new TreeNode(2)

let tree4 = new TreeNode(1)
tree4.right = new TreeNode(2)

let tree5 = new TreeNode(1)
tree5.left = new TreeNode(2)
tree5.right = new TreeNode(1)

let tree6 = new TreeNode(1)
tree6.left = new TreeNode(1)
tree6.right = new TreeNode(2)

// runs on O(n) time as there is only one loop
// I feel like we could reduce down the if statements a little, there are a lot.  but it works and runs in 42ms
const isSameTree = (t1, t2) => {

    if (!t1 && !t2) return true;
    if (t1 && !t2 || !t1 && t2) return false;

    const q1 = [t1];
    const q2 = [t2];

    while (q1.length && q2.length) {
        let curr1 = q1.pop();
        let curr2 = q2.pop();

        if (curr1.val !== curr2.val) return false

        if (curr1.left) q1.push(curr1.left);
        if (curr2.left) q2.push(curr2.left);
        if (q1[0] && !q2[0] || !q1[0] &&q2[0]) return false
        if (curr1.right) q1.push(curr1.right);
        if (curr2.right) q2.push(curr2.right);
    }

    if (!q1.length && !q2.length) return true;
    else return false;
}

console.log(isSameTree(tree1, tree2));
console.log(isSameTree(tree3, tree4));
console.log(isSameTree(tree5, tree6));


// recursive and simpler solution

const sametree = (t1, t2) => {
    if (!t1 && !t2) return true;            // since we already removed any submissions which are both empty
    if (!t1 || !t2) return false;           // then we only have to check that one or the other is empty and be able to return that false

    return t1.val === t2.val && sametree(t1.left, t2.left) && sametree(t1.right, t2.right);
    // with recursion, all we have to do is return the comparison of the two current nodes
    // by returning two different recursive statements we can check the proper sides of the trees without an extream amount of if statements
    // the function will return false if at any point we hit a value which does not match
    // and the above first statmenet will return true if we have nothing left to check,
    // and the above second statement will make sure that if we compare where a node does and doesn't exist we still return false.
}
