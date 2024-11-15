
// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
         this.val = val;
         this.left = left;
         this.right = right;
     }
 }


function isSubtree(root, subRoot) {
    if (!root) return false;
    const isSame = (node1, node2) => {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;
        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    }
    return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}


const root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(6)), new TreeNode(5));
const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

console.log(isSubtree(root, subRoot)); // true
