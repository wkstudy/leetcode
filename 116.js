// 116. 填充每个节点的下一个右侧节点指针
// 逐层遍历 arr[i].next=arr[i+1]
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  var record = [];
  if (!root) return root;
  record.push(root);
  while (record.length) {
    let arr = record.slice();
    record = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].left) record.push(arr[i].left);
      if (arr[i].right) record.push(arr[i].right);
      if (arr[i + 1]) {
        arr[i].next = arr[i + 1];
      } else {
        arr[i].next = null;
      }
    }
  }
  return root;
};
