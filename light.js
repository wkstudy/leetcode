// 中序遍历非递归
function mid(root) {
  let res = [];
  if (!root) return res;
  let stack = [];
  stack.push(root);
  let cur = root;
  while (stack.length) {
    while (cur.left) {
      stack.push(cur.left);
      cur = cur.left;
    }
    let n = stack.pop();
    res.push(n.val);
    cur = n.right;
  }
  return res;
}
