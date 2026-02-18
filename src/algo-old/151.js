var reverseWords = function (s) {
  return s.split(' ').filter(a => !!a).reverse().join(' ')
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
  { args: ["the sky is blue"], expected: "blue is sky the", comment: "// 输入：s = \"the sky is blue  输出：blue is sky the" },
  { args: ["  hello world"], expected: "world hello", comment: "// 输入：s = \"  hello world    输出：world hello" },
  { args: ["a good   example"], expected: "example good a", comment: "// 输入：s = \"a good   example  输出：example good a" },
];

__lcRunExamples(O, __lcExamples);