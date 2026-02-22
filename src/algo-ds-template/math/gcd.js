/**
 * 计算两个数的最大公约数（欧几里得算法）
 * @param {number} a - 整数
 * @param {number} b - 整数
 * @returns {number} 最大公约数
 */
function gcd(a, b) {
  // 先取绝对值，处理负数
  a = Math.abs(a)
  b = Math.abs(b)
  // 欧几里得算法核心：gcd(a,b) = gcd(b,a%b)
  while (b !== 0) {
    ;[a, b] = [b, a % b]
  }
  return a
}

// 测试
console.log(gcd(12, 18)) // 输出：6
console.log(gcd(0, 5)) // 输出：5
console.log(gcd(-12, 18)) // 输出：6
