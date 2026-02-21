var longestAlternating = function (nums) {
  const n = nums.length
  let ans = 1
  const left = new Array(n).fill(0).map(() => [1, 1])
  const right = new Array(n).fill(0).map(() => [1, 1])
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      left[i][0] = 1 + left[i - 1][1]
    } else if (nums[i - 1] > nums[i]) {
      left[i][1] = 1 + left[i - 1][0]
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) {
      right[i][1] = 1 + right[i + 1][0]
    } else if (nums[i] < nums[i + 1]) {
      right[i][0] = 1 + right[i + 1][1]
    }
  }
  for (let i = 1; i < n; i++) {
    ans = Math.max(ans, left[i][0], left[i][1])
    if (nums[i - 1] > nums[i + 1]) {
      ans = Math.max(ans, left[i - 1][0] + right[i + 1][0])
    } else if (nums[i - 1] < nums[i + 1]) {
      ans = Math.max(ans, left[i - 1][1] + right[i + 1][1])
    }
  }
  return ans
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
  { args: [[2, 1, 3, 2]], expected: 4, comment: "// 输入：nums = [2,1,3,2]  输出：4" },
  { args: [[3, 2, 1, 2, 3, 2, 1]], expected: 4, comment: "// 输入：nums = [3,2,1,2,3,2,1]  输出：4" },
  { args: [[100000, 100000]], expected: 1, comment: "// 输入：nums = [100000,100000]  输出：1" },
];

__lcRunExamples(longestAlternating, __lcExamples);