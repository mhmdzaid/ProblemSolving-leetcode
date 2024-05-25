/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return isSymmetricR(root.left, root.right);
};


var isSymmetricR = (tree1, tree2) => {
  if (!tree1 && !tree2) {
    return true;
  }

  if (!tree1 || !tree2 || tree1.val !== tree2.val) {
    return false;
  }

  return (
    isSymmetricR(tree2.left, tree1.right) &&
    isSymmetricR(tree1.left, tree2.right)
  );
};