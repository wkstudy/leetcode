// 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // 深度便利
  if (!root) return [];
  let res = [];
  dfs(root, [], res);
  return res.map(arr => arr.join("->"));
};
/**
    arr 记录当前根节点到该节点的路径
 */
function dfs(p, arr, res) {
  let curArr = arr.concat(p.val);
  if (p.left) {
    dfs(p.left, curArr, res);
  }
  if (p.right) {
    dfs(p.right, curArr, res);
  }
  if (!p.left && !p.right) {
    res.push(curArr);
  }
}
