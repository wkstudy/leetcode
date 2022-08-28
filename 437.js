// 437. 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  //  1.深度遍历获取所有路径
  // 2. 所有路径中找到符合条件的
  let paths = [];
  function dfs(p, arr) {
    if (p) {
      let _arr = arr.concat(p.val);
      if (p.left) {
        dfs(p.left, _arr);
      }
      if (p.right) {
        dfs(p.right, _arr);
      }
      if (!p.left && !p.right) {
        // 叶子节点将记录的路径放到paths里
        paths.push(_arr);
      }
    }
  }
  dfs(root, []);
  console.log(paths);
  let res = 0;
  let resPoints = [];
  // 这里的思路是paths里的每个数组都计算一遍，但导致的问题是两个数组之间可能会重复计算，不太好去重
  paths.forEach(arr => {
    const len = arr.length;
    for (let k = 0; k < len; k++) {
      const sonArr = arr.slice(k);
      // 具体的思路是对于 [10,5,2,1],计算包括10的所有可能[10][10,5][10,5,2][10,5,2,1]
      //    计算包括5的所有可能(不再往左了)[5][5,2][5,2,1],一次类推
      res += cal2(sonArr, targetSum, resPoints);
    }
  });
  const h = resPoints.map(item => item.join("-"));
  // 这里的去重明显是瞎写的。。。 不太会了
  return [...new Set(h)].length;
  // return res;
};
function cal2(arr, targetSum, resPoints) {
  const len = arr.length;
  let temp = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
    temp += arr[i];
    if (temp === targetSum) {
      resPoints.push(arr.slice(0, i + 1));
      res++;
    }
  }
  return res;
}
function cal(arr, targetSum, startWidth) {
  // 这里的 startWidth 是为了防止重复，最开始长度为1，当排除了第一个元素后，最开始长度就位2了
  let res = 0;
  const len = arr.length;
  for (let i = startWidth; i <= len; i++) {
    let pos = 0;
    let temp = 0;
    for (let j = 0; j < len; j++) {
      if (pos < i) {
        temp += arr[j];
        pos++;
      } else if (pos === i) {
        // pos == i
        if (temp === targetSum) {
          console.log(arr, i, j);
          res++;
        }
        temp = 0;
        pos = 0;
      }
      if (j === len - 1) {
        // pos < i 但到最后一个值了
        if (temp === targetSum) res++;
        temp = 0;
        pos = 0;
      }
    }
  }

  return res;
}
