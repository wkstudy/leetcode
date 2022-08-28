// 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  let res = 0;
  function dfs(p) {
    if (!p) return;
    if (p.left) {
      if (p.left && !p.left.left && !p.left.right) res += p.left.val;
      dfs(p.left);
    }
    if (p.right) {
      dfs(p.right);
    }
  }
  dfs(root);
  return res;
};
