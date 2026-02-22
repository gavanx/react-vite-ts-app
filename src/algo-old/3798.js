var largestEven = function (s) {
  while (s[s.length - 1] === '1') {
    s = s.slice(0, -1)
  }
  return s
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
  { args: ["1112"], expected: 1112, comment: "// 输入：s = \"1112  输出：1112" },
  { args: ["221"], expected: 22, comment: "// 输入：s = \"221  输出：22" },
];

__lcRunExamples(largestEven, __lcExamples);