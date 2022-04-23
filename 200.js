// 200. 岛屿数量
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  let s = new Set();
  let h = grid.length; // 竖
  let v; // 横
  if (h) v = grid[0].length;
  // 注意 `${i}${j}`不能用做唯一标识，因为11 1 和 1 11存起来效果一样，导致结果出错
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < v; j++) {
      if (grid[i][j] === "1" && !s.has(`${i}-${j}`)) {
        count++;
        fn(i, j);
      }
    }
  }
  console.log(s.entries());
  function fn(i, j) {
    if (i >= 0 && j >= 0 && i < h && j < v && !s.has(`${i}-${j}`) && grid[i][j] === "1") {
      s.add(`${i}-${j}`);
      fn(i - 1, j);
      fn(i + 1, j);
      fn(i, j - 1);
      fn(i, j + 1);
    }
    return;
  }
  return count;
};
