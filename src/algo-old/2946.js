var areSimilar = function (mat, k) {
  const m = mat.length
  const n = mat[0].length
  for (let i = 0; i < m; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < n; j++) {
        if (mat[i][(j - k % n + n) % n] != mat[i][j]) {
          return false
        }
      }
    } else {
      for (let j = 0; j < n; j++) {
        if (mat[i][(j + k) % n] != mat[i][j]) {
          return false
        }
      }
    }
  }
  return true
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
  // { args: [[[1, 2, 1, 2], [5, 5, 5, 5], [6, 3, 6, 3]], 2], expected: true, comment: "// 输入：mat = [[1,2,1,2],[5,5,5,5],[6,3,6,3]], k = 2  输出：true" },
  { args: [[[2, 2], [2, 2]], 3], expected: true, comment: "// 输入：mat = [[2,2],[2,2]], k = 3  输出：true" },
  // { args: [[[1, 2]], 1], expected: false, comment: "// 输入：mat = [[1,2]], k = 1  输出：false" },
];

__lcRunExamples(areSimilar, __lcExamples);