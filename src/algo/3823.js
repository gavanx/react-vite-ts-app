var reverseByType = function (s) {
  const n = s.length
  let ans = ''
  const a = []
  const b = []
  for (let i = 0; i < n; i++) {
    if (s[i] >= 'a' && s[i] <= 'z') {
      a.push(s[i])
    } else {
      b.push(s[i])
    }
  }
  for (let i = 0; i < n; i++) {
    if (s[i] >= 'a' && s[i] <= 'z') {
      ans += a.pop()
    } else {
      ans += b.pop()
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
  { args: [")ebc#da@f("], expected: "(fad@cb#e)", comment: "// 输入：s = \")ebc#da@f(  输出：(fad@cb#e)" },
  { args: ["z"], expected: "z", comment: "// 输入：s = \"z  输出：z" },
  { args: ["!@#$%^&*()"], expected: ")(*&^%$#@!", comment: "// 输入：s = \"!@#$%^&*()  输出：)(*&^%$#@!" },
];

__lcRunExamples(reverseByType, __lcExamples);