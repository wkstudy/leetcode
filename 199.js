// 199. 二叉树的右视图
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
var rightSideView = function (root) {
  // step1 逐层遍历
  //step2 拿到一层的最右边的值

  let nodes = [];
  function fn(root, res, index) {
    if (!root) return;
    if (Array.isArray(res[index])) {
      res[index].push(root.val);
    } else {
      res[index] = [root.val];
    }
    index++;
    if (root.left) {
      fn(root.left, res, index);
    }
    if (root.right) {
      fn(root.right, res, index);
    }
  }

  fn(root, nodes, 0);
  let res = [];
  let len = nodes.length;
  for (let i = 0; i < len; i++) {
    res.push(nodes[i][nodes[i].length - 1]);
  }

  return res;
};

// 关键点在于
//  1. 想到要用逐层遍历来拿到一层的数据
//  2. 逐层遍历的实现？需要加一个变量来记录层级信息
