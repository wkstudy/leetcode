// 101. 对称二叉树
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
  return same(root.left, root.right);
  function same(node1, node2) {
    if (!node1 && !node2) return true;
    if (node1 && node2 && node1.val === node2.val)
      return same(node1.left, node2.right) && same(node1.right, node2.left);
    return false;
  }
};
