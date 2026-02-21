var lexSmallestAfterDeletion = function (s) {
  const cnt = {}
  for (const c of s) {
    cnt[c] = (cnt[c] || 0) + 1
  }
  const st = []
  for (const c of s) {
    while (st.length > 0 && c < st[st.length - 1] && cnt[st[st.length - 1]] > 1) {
      cnt[st[st.length - 1]]--
      st.pop()
    }
    st.push(c)
  }
  while (st.length > 0 && cnt[st[st.length - 1]] > 1) {
    cnt[st[st.length - 1]]--
    st.pop()
  }

  return st.join('')
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
  { args: ["aaccb"], expected: "aacb", comment: "// 输入：s = \"aaccb  输出：aacb" },
  { args: ["z"], expected: "z", comment: "// 输入：s = \"z  输出：z" },
];

__lcRunExamples(lexSmallestAfterDeletion, __lcExamples);