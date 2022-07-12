// 求根节点到叶节点数字之和  和 113 基本一样
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
var sumNumbers = function (root) {
  let res = [];
  function dfs(p, arr) {
    if (p) {
      if (p.left) dfs(p.left, arr.concat([p.val]));
      if (p.right) dfs(p.right, arr.concat([p.val]));
      if (!p.left && !p.right) res.push(arr.concat([p.val]));
    }
  }
  dfs(root, []);
  return res.map((arr) => arr.reduce((total, cur) => total + "" + cur, 0)).reduce((total, cur) => +total + +cur, 0);
};
