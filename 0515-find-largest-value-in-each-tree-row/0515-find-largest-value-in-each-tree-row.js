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
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) {
    return [];
  }
  
  const largestValues = [];
  const queue = [root];
  
  while (queue.length) {
    let max = -Infinity;
    const queueLength = queue.length;
    
    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();  // dequeue the current node
      if (node.val > max) {
        max = node.val;
      }
      if (node.left) {
        queue.push(node.left);  // enqueue the left child
      }
      if (node.right) {
        queue.push(node.right);  // enqueue the right child
      }
    }
    
    largestValues.push(max);
  }
  
  return largestValues;
};
