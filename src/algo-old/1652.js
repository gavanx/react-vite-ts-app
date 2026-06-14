var decrypt = function (code, k) {
  const n = code.length
  if (k == 0) {
    return new Array(n).fill(0)
  }
  let s = 0,
    c = 0
  if (k > 0) {
    let i = 1
    while (c < k) {
      c++
      s += code[i]
      i = (i + 1) % n
    }
    const ans = []
    for (let i = 0; i < n; i++) {
      ans.push(s)
      s -= code[i + 1]
      s += code[(i + k + 1) % n]
    }
    return ans
  } else {
    let i = n - 1
    k = -k
    while (c < k) {
      c++
      s += code[i]
      i = (i - 1 + n) % n
    }
    const ans = []
    for (let i = 0; i < n; i++) {
      ans.push(s)
      s += code[i]
      s -= code[(i - k + n) % n]
    }
    return ans
  }
}



const CASE_SLOW_MS = 20;
const TOTAL_SLOW_MS = 100;

function __lcRunExamples(fn, cases) {
  let totalMs = 0;
  let allPassed = true;
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i];
    if (comment) console.log(`${i + 1}`, comment);
    const t0 = performance.now();
    try {
      const got = fn(...args);
      const ms = performance.now() - t0;
      totalMs += ms;
      const gotOut = Array.isArray(got) ? got.join() : got;
      const expectedOut = Array.isArray(expected) ? expected.join() : expected;
      const ok = gotOut === expectedOut;
      if (!ok) allPassed = false;
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;';
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut });
      const slow = ms > CASE_SLOW_MS;
      const timeStyle = slow ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;' : 'color:#64748b;';
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`);
    } catch (e) {
      allPassed = false;
      const ms = performance.now() - t0;
      totalMs += ms;
      const slow = ms > CASE_SLOW_MS;
      const timeStyle = slow ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;' : 'color:#64748b;';
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`);
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) }); throw e;
    }
  }
  const totalSlow = totalMs > TOTAL_SLOW_MS;
  const totalStyle = totalSlow ? 'color:#dc2626;font-weight:800;background:#fee2e2;padding:2px 4px;border-radius:4px;border:1px solid #dc2626;' : 'color:#64748b;';
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms [${allPassed ? 'success' : 'fail'}]`, totalStyle);
}

const __lcExamples = [
  { args: [[5, 7, 1, 4], 3], expected: [12, 10, 16, 13], comment: "// 输入：code = [5,7,1,4], k = 3  输出：[12,10,16,13]" },
  { args: [[1, 2, 3, 4], 0], expected: [0, 0, 0, 0], comment: "// 输入：code = [1,2,3,4], k = 0  输出：[0,0,0,0]" },
  { args: [[2, 4, 9, 3], -2], expected: [12, 5, 6, 13], comment: "// 输入：code = [2,4,9,3], k = -2  输出：[12,5,6,13]" },
];

__lcRunExamples(decrypt, __lcExamples);