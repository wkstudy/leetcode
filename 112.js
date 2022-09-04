// 112. 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return dfs(root, targetSum);
};
function dfs(p, target) {
  if (!p) return false;
  // 叶子节点
  if (!p.left && !p.right) {
    return p.val === target;
  }
  return dfs(p.left, target - p.val) || dfs(p.right, target - p.val);
}
