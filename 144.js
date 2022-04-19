// 144. 二叉树的前序遍历

// 就是个递归，也不是栈和队列解决啊
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
var preorderTraversal = function (root) {
  let res = [];

  function fn(root, res) {
    if (!root) return;
    if (root.val) {
      res.push(root.val);
    }
    if (root.left) {
      fn(root.left, res);
    }
    if (root.right) {
      fn(root.right, res);
    }
  }
  fn(root, res);
  return res;
};
