/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minRemovals = function (nums) {
  // 处理参数兼容（适配 LeetCode 传参方式）
  const target = arguments.length > 1 ? arguments[1] : 0;

  // 辅助函数：计算数字的二进制位数（等价于 Python 的 bit_length()）
  const bitLength = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log2(num)) + 1;
  };

  // 边界处理：空数组
  if (nums.length === 0) {
    return target === 0 ? 0 : -1;
  }

  // 计算数组最大值的二进制位数
  const maxNum = Math.max(...nums);
  const m = bitLength(maxNum);
  const targetBitLen = bitLength(target);

  // 如果目标值的二进制位数超过数组最大值，直接返回-1
  if (m < targetBitLen) {
    return -1;
  }

  const n = nums.length;
  const INF = -Number.MAX_SAFE_INTEGER;
  const dpSize = 1 << m; // 2^m，状态总数

  // 初始化DP数组：(n+1)行，dpSize列，初始值为-INF
  const f = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    f[i] = new Array(dpSize).fill(INF);
  }
  f[0][0] = 0; // 初始状态：选0个元素，异或和为0，选了0个元素

  // 遍历每个数字
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    // 遍历所有可能的异或状态
    for (let j = 0; j < dpSize; j++) {
      // 状态转移：不选当前数字 / 选当前数字
      const notChoose = f[i][j];
      const choose = f[i][j ^ x] + 1;
      f[i + 1][j] = Math.max(notChoose, choose);
    }
  }

  // 如果无法达到目标状态，返回-1
  if (f[n][target] < 0) {
    return -1;
  }
  // 总元素数 - 选中的元素数 = 需要移除的元素数
  return n - f[n][target];
};

// 测试示例
console.log(minRemovals([3, 5, 7], 4)); // 测试用例1
console.log(minRemovals([1, 2, 3], 7)); // 测试用例2
console.log(minRemovals([1, 1, 1], 1)); // 测试用例3