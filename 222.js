// 222. 完全二叉树的节点个数

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
 * @return {number}
 */
var countNodes = function (root) {
  var res = 0;
  var queue = [];
  if (root) queue.push(root);
  while (queue.length) {
    let temp = queue.shift();
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
    res++;
  }
  return res;
};
