var minPartitionScore = function (nums, k) {
  const n = nums.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(Infinity))
  const pre = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] + nums[i]
  }
  dp[0][0] = 0
  for (let i = 1; i <= n; i++) {
    const x = nums[i - 1]
    dp[i][0] = 0
    for (let j = 1; j <= k; j++) {
      if (j < i) {
        // 可划分，递推
        let min = Infinity
        for (let d = 1; d <= i - j; d++) {
          let sum = pre[i] - pre[i - j]
          sum = sum * (sum + 1) / 2
          // j-1组和最后一组，最后一组可能加长
          min = Math.min(min, dp[i - d][j - 1] + sum)
        }
        let sum = pre[i] - pre[i - 1]
        sum = sum * (sum + 1) / 2
        min = Math.min(min, dp[i - 1][j - 1] + sum)
        dp[i][j] = min
      } else if (j === i) {
        // 完成均分，每个元素一组
        let sum = 0
        for (let l = 0; l < i; l++) {
          // 可用前缀和加速
          const y = nums[l]
          sum += (y * (y + 1)) >> 1
        }
        dp[i][j] = sum
      }
    }
  }
  return dp[n][k]
}



function __lcRunExamples(fn, cases) {
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i];
    if (comment) console.log(`${i + 1}`, comment);
    try {
      const got = fn(...args);
      const gotOut = Array.isArray(got) ? got.join() : got;
      const expectedOut = Array.isArray(expected) ? expected.join() : expected;
      const ok = gotOut === expectedOut;
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;';
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut }, `
`);
    } catch (e) {
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) }, `
`); throw e;
    }
  }
}

const __lcExamples = [
  { args: [[5, 1, 2, 1], 2], expected: 25, comment: "// 输入：nums = [5,1,2,1], k = 2  输出：25" },
  { args: [[1, 2, 3, 4], 1], expected: 55, comment: "// 输入：nums = [1,2,3,4], k = 1  输出：55" },
  { args: [[1, 1, 1], 3], expected: 3, comment: "// 输入：nums = [1,1,1], k = 3  输出：3" },
];

__lcRunExamples(minPartitionScore, __lcExamples);