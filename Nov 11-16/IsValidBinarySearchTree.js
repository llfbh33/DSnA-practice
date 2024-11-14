class TreeNode {
         constructor(val = 0, left = null, right = null) {
             this.val = val;
            this.left = left;
             this.right = right;
         }
}

const isValidBST = (root) => {
    if (!root.left && !root.right) return true;
    if (root.left && root.left.val > root.val) return false;
    if (root.right && root.right.val < root.val) return false;
    return isValidBST(root.left) && isValidBST(root.right);
 }


const root = new TreeNode(2, new TreeNode(1, new TreeNode (0)), new TreeNode(3, new TreeNode(5)));
console.log(isValidBST(root)); // true
