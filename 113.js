// 113.路径总和
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let res = [];
  // 先根遍历, 记录路径
  function dfs(p, arr) {
    if (p) {
      if (p.left) dfs(p.left, arr.concat([p.val]));
      if (p.right) dfs(p.right, arr.concat([p.val]));
      // 叶子节点
      if (!p.left && !p.right) res.push(arr.concat([p.val]));
    }
  }
  dfs(root, []);
  return res.filter((arr) => arr.reduce((total, cur) => total + cur, 0) === targetSum);
};
