var minimumK = function (nums) {
  let l = Math.floor(Math.sqrt(nums.length)), r = Math.max(...nums)
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    let cnt = 0
    for (let x of nums) {
      cnt += Math.ceil(x / mid)
    }
    if (cnt <= mid * mid) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}

console.log(minimumK([1, 1]))

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
  { args: [[3, 7, 5]], expected: 3, comment: "// 输入：nums = [3,7,5]  输出：3" },
  { args: [[1]], expected: 1, comment: "// 输入：nums = [1]  输出：1" },
];

__lcRunExamples(minimumK, __lcExamples);