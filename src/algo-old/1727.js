var largestSubmatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const h = new Array(n).fill(0)
  for (const row of matrix) {
    for (let j = 0; j < n; j++) {
      if (row[j] === 0) {
        h[j] = 0
      } else {
        h[j] += 1
      }
    }
  }
  h.sort((a, b) => b - a)
  let ans = 0
  for (let j = 0; j < n; j++) {
    if (h[j] === 0) {
      break
    }
    ans = Math.max(ans, (j + 1) * h[j])
  }
  return ans
}

console.log(largestSubmatrix([[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1],[1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0]]))


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
  { args: [[[0, 0, 1], [1, 1, 1], [1, 0, 1]]], expected: 4, comment: "// 输入：matrix = [[0,0,1],[1,1,1],[1,0,1]]  输出：4" },
  { args: [[[1, 0, 1, 0, 1]]], expected: 3, comment: "// 输入：matrix = [[1,0,1,0,1]]  输出：3" },
  { args: [[[1, 1, 0], [1, 0, 1]]], expected: 2, comment: "// 输入：matrix = [[1,1,0],[1,0,1]]  输出：2" },
  { args: [[[0, 0], [0, 0]]], expected: 0, comment: "// 输入：matrix = [[0,0],[0,0]]  输出：0" },
];

__lcRunExamples(largestSubmatrix, __lcExamples);