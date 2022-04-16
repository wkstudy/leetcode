//  Pow(x, n)
// 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn ）。

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  return n > 0 ? fn(x, Math.abs(n)) : 1 / fn(x, Math.abs(n));
};
var fn = (x, n) => {
  if (n === 0) {
    return 1;
  }
  let temp = Math.floor(Math.sqrt(n));
  return n === 1 ? x : fn(fn(x, temp), temp) * fn(x, n - temp * temp);
};
