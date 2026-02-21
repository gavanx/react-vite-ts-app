var lengthOfLIS = function (nums) {
  const f = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    const x = nums[i]
    let l = 0,
      r = f.length
    while (l < r) {
      const mid = (l + r) >> 1
      if (f[mid] < x) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    if (l < f.length) {
      f[l] = x
    } else {
      f.push(x)
    }
  }
  return f.length
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
  { args: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4, comment: "// 输入：nums = [10,9,2,5,3,7,101,18]  输出：4" },
  { args: [[0, 1, 0, 3, 2, 3]], expected: 4, comment: "// 输入：nums = [0,1,0,3,2,3]  输出：4" },
  { args: [[7, 7, 7, 7, 7, 7, 7]], expected: 1, comment: "// 输入：nums = [7,7,7,7,7,7,7]  输出：1" },
];

__lcRunExamples(lengthOfLIS, __lcExamples);