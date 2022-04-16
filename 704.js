//给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right - left > 1) {
    let pos = Math.floor((left + right) / 2);
    if (nums[pos] === target) {
      return pos;
    } else if (nums[pos] > target) {
      right = pos;
    } else {
      left = pos;
    }
  }
  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
};
