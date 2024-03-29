// 236. 二叉树的最近公共祖先
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 思路一：记录所有路径（遍历到叶子结点），然后找答案 （内存溢出）
var lowestCommonAncestor = function (root, p, q) {
  // 记录所有路径，然后对比照最近的
  let res = [];
  function dfs(point, arr) {
    if (point) {
      if (point.left) dfs(point.left, arr.concat(point));
      if (point.right) dfs(point.right, arr.concat(point));
      //  叶子节点说明一条路径完成了
      if (!point.left && !point.right) res.push(arr.concat(point));
    }
  }
  dfs(root, []);
  let pPath = res.find(item => item.findIndex(inner => inner === p) !== -1);
  pPath = pPath.slice(0, pPath.findIndex(item => item === p) + 1);
  let qPath = res.find(item => item.findIndex(inner => inner === q) !== -1);
  qPath = qPath.slice(0, qPath.findIndex(item => item === q) + 1);

  for (let i = 0; i < Math.max(qPath.length, pPath.length); i++) {
    if (pPath[i] !== qPath[i]) {
      return pPath[i - 1];
    }
  }
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 思路2: 不用找所有的路径， 找到p、q的路径记录下来就行（遍历到p q节点就行） （内存溢出）
var lowestCommonAncestor = function (root, p, q) {
  let res = [];
  // 记录所有路径，然后对比照最近的
  function dfs(point, arr, p, q) {
    if (point) {
      if (point === p || point === q) {
        res.push(arr.concat(point));
      }
      if (point.left) dfs(point.left, arr.concat(point), p, q);
      if (point.right) dfs(point.right, arr.concat(point), p, q);
      //  叶子节点说明一条路径完成了 (此时不在记录)
      // if(!point.left && !point.right) res.push(arr.concat(point))
    }
  }
  dfs(root, [], p, q);
  let fir = res[0];
  let sec = res[1];
  for (let i = 0; i < Math.max(fir.length, sec.length); i++) {
    if (fir[i] !== sec[i]) {
      return sec[i - 1];
    }
  }
};

// 思路三  做出来了

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // root肯定是能找到p q
  // root往下dfs他的left right节点， 在left、right节点里分别找pq
  // 如果left里找到，那么就接着从left开始找，
  // 如果是right里找到，那么从right里找，
  // 如果left\right都找不到，说明当前节点就是答案
  function dfs(root) {
    if (!root) return false;
    if (!root.left && !root.right) return false;
    let leftRes = [findPoint(root.left, p), findPoint(root.left, q)];
    let rightRes = [findPoint(root.right, p), findPoint(root.right, q)];
    if (root.left) {
      if (leftRes[0] && leftRes[1]) {
        res = root.left;
        return dfs(root.left);
      }
    }

    if (root.right) {
      if (rightRes[0] && rightRes[1]) {
        res = root.right;
        return dfs(root.right);
      }
    }
    return;
  }
  function findPoint(p, target) {
    if (!p) return false;
    if (p === target) return true;
    return findPoint(p.left, target) || findPoint(p.right, target);
  }
  let res = root;
  dfs(root);
  return res;
};
