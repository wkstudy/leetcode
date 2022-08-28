// 450. 删除二叉搜索树中的节点

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // key是非叶子节点，替换为其右子树中最左边的那个，并把最左边的节点删除
  // 叶子节点 直接删
  if (!root) return root;
  let p = root;
  let parent = root;
  while (p && p.val !== key) {
    parent = p;
    if (p.val < key) {
      p = p.right;
    } else {
      p = p.left;
    }
  }
  if (!p) return root;
  if (!p.left && !p.right) {
    if (parent === p) {
      return null;
    }
    // 叶子节点
    if (parent.left === p) {
      parent.left = null;
    } else {
      parent.right = null;
    }
    return root;
  }
  // 找右子树里最左边的
  let sonP = p;
  let son = p.right;
  // 没有右子树
  if (!son) {
    if (p === root) {
      return root.left;
    } else {
      if (parent.left && parent.left.val === key) {
        parent.left = p.left;
        return root;
      } else {
        parent.right = p.left;
        return root;
      }
    }
  }
  while (son && son.left) {
    sonP = son;
    son = son.left;
  }
  if (sonP === p) {
    // 说明key的右子树没有左孩子
    p.val = son.val;
    p.right = son.right;
    return root;
  }

  p.val = son.val;
  sonP.left = son.right;
  return root;
};
