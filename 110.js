// 110. 平衡二叉树
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
// 需要注意的点时 一个node符合要求不代表它的左子树或者右子树也符合要求，需要处理每一个node
var isBalanced = function (root) {
  return isRight(root);

  function isRight(root) {
    if (!root) return true;
    if (root.left && root.right) return Math.abs(height(root.left) - height(root.right)) <= 1 && isRight(root.left) && isRight(root.right);
    if (!root.left && root.right) return height(root.right) <= 1 && isRight(root.right);
    if (!root.right && root.left) return height(root.left) <= 1 && isRight(root.right);
    return true;
  }
  function height(root) {
    if (!root) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
  }
};
//  又做了一遍

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
var isBalanced = function (root) {
  return dfs(root);
};
// 节点的高度
function height(p) {
  if (!p) return 0;
  if (!p.left && !p.right) return 1;
  return 1 + Math.max(height(p.left), height(p.right));
}
function dfs(p) {
  if (!p) return true;
  if (!p.left && !p.right) return true;
  return Math.abs(height(p.left) - height(p.right)) <= 1 && dfs(p.left) && dfs(p.right);
}
