// 150. 逆波兰表达式求值
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let expresss = ["+", "-", "*", "/"];
  let len = tokens.length;
  for (let i = 0; i < len; i++) {
    if (expresss.includes(tokens[i])) {
      let right = stack.pop();
      let left = stack.pop();
      stack.push(parseInt(eval(`(${left})${tokens[i]}(${right})`)));
    } else {
      stack.push(tokens[i]);
    }
  }
  return stack.pop();
};
// 关于运算这里可以借鉴其他人的实现方式，不用eval
// let oprator = new Set(['+', '-', '*', '/']);
// 	tokens.forEach(n => {
// 		if (oprator.has(n)) {
// 			let a = stack.pop(),
// 				b = stack.pop(),
// 				c;
// 			switch (n) {
// 				case '+':
// 					c = b + a;
// 					break;
// 				case '-':
// 					c = b - a;
// 					break;
// 				case '*':
// 					c = b * a;
// 					break;
// 				case '/':
// 					c = parseInt(b / a);
// 					break;
// 				default:
// 					break;
// 			}
// 			stack.push(c);

// 作者：641031
// 链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/solution/js-chang-gui-jie-fa-yi-ji-jiang-switch-y-soos/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
