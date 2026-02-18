var minSubArrayLen = function (target, nums) {
  let left = 0
  let right = 0
  let sum = 0
  let minLength = Infinity

  while (right < nums.length) {
    sum += nums[right]

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1)
      sum -= nums[left]
      left++
    }

    right++
  }

  return minLength === Infinity ? 0 : minLength
}
function __lcRunExamples(fn, cases) {
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i];
    if (comment) console.log(comment);
    try {
      const got = fn(...args);
      const gotOut = Array.isArray(got) ? got.join() : got;
      const expectedOut = Array.isArray(expected) ? expected.join() : expected;
      const ok = gotOut === expectedOut;
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;';
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut });
    } catch (e) {
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) });
    }
  }
}

const __lcExamples = [
  { args: [7, [2,3,1,2,4,3]], expected: 2, comment: "// 输入：target = 7, nums = [2,3,1,2,4,3]  输出：2" },
  { args: [4, [1,4,4]], expected: 1, comment: "// 输入：target = 4, nums = [1,4,4]  输出：1" },
  { args: [11, [1,1,1,1,1,1,1,1]], expected: 0, comment: "// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]  输出：0" },
];

__lcRunExamples(minSubArrayLen, __lcExamples);