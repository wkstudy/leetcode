// 108. 将有序数组转换为二叉搜索树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 只要永远插入数组里最中间的一项，那么就能保证高度平衡
  let root = null;
  // 这种方式不行
  // while(nums.length) {
  //     let pos = parseInt(nums.length)/2;
  //     let point = nums.splice(pos, 1);
  //     let node = new TreeNode(point[0], null, null)
  //     console.log(point[0])
  //    insert(node)
  // }

  let final = [];
  let tmp = [];
  tmp.push(nums);
  // 永远找到当前数组中的最中间的那个
  while (tmp.length) {
    let arr = tmp.shift();
    if (arr.length === 1) {
      final.push(arr[0]);
    } else {
      let midPos = parseInt(arr.length / 2);
      if (midPos) {
        // midpos!=0
        tmp.push(arr.slice(0, midPos));
      }
      if (midPos + 1 <= arr.length - 1) {
        // 不超过最后一个元素
        tmp.push(arr.slice(midPos + 1));
      }
      final.push(arr[midPos]);
    }
  }
  final.forEach((item) => insert(new TreeNode(item, null, null)));
  function insert(node) {
    if (!root) {
      root = node;
    } else {
      // 插入叶子结点
      let parent = root;
      let son = root;
      while (son) {
        parent = son;
        if (node.val < parent.val) {
          son = son.left;
        } else {
          son = son.right;
        }
      }
      if (node.val < parent.val) {
        parent.left = node;
      } else {
        parent.right = node;
      }
    }
  }
  return root;
};
