// 102. 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  var arr = [];
  var res = [];
  arr.push(root);
  while (arr.length) {
    res.push(arr.map((item) => item.val));
    var temp = [];
    while (arr.length) {
      const v = arr.shift();
      if (v.left) {
        temp.push(v.left);
      }
      if (v.right) {
        temp.push(v.right);
      }
    }
    arr = temp;
  }
  return res;
};
