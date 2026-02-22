var wordSquares = function (words) {
  const n = words.length
  const ans = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j == i) continue
      for (let k = 0; k < n; k++) {
        if (k == j || k == i) continue
        for (let l = 0; l < n; l++) {
          if (l == i || l == j || l == k) continue
          const top = words[i]
          const left = words[j]
          const bottom = words[k]
          const right = words[l]
          if (top[0] == left[0] && top[3] == right[0] &&
            bottom[0] == left[3] && bottom[3] == right[3]) {
            ans.push([top, left, right, bottom])
          }
        }
      }
    }
  }
  return ans.sort((a, b) => a.join('').localeCompare(b.join('')))
}

console.log(wordSquares(["avvj", "dooe", "exxj", "diia"]).join('\n'))


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
  { args: [["able", "area", "echo", "also"]], expected: [["able", "area", "echo", "also"], ["area", "able", "also", "echo"]], comment: "// 输入：words = [\"able\",\"area\",\"echo\",\"also\"]  输出：[[\"able\",\"area\",\"echo\",\"also\"],[\"area\",\"able\",\"also\",\"echo\"]]" },
  { args: [["code", "cafe", "eden", "edge"]], expected: [], comment: "// 输入：words = [\"code\",\"cafe\",\"eden\",\"edge\"]  输出：[]" },
];

__lcRunExamples(wordSquares, __lcExamples);