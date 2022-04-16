// x的平方根

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 0,
    right = x;
  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2);
    let res = mid * mid;
    if (res === x) {
      return mid;
    } else if (res > x) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return Math.floor((left + right) / 2);
};
