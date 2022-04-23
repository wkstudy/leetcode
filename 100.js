// 100. 相同的树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  var bfs = (root) => {
    var arr = [];
    var res = [];
    if (root) arr.push(root);
    while (arr.length) {
      let n = arr.pop();
      if (n) {
        res.push(n.val);
        arr.push(n.left);
        arr.push(n.right);
      } else {
        res.push("null");
      }
    }
    return res;
  };
  return bfs(p).toString() === bfs(q).toString();
};
