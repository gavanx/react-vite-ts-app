var minimumEffort = function (tasks) {
  tasks = tasks.sort((a, b) => b[1] - b[0] - (a[1] - a[0]))
  let s = 0
  let ans = 0
  for (const t of tasks) {
    ans = Math.max(ans, s + t[1])
    s += t[0]
  }
  return ans
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
  { args: [[[1, 2], [2, 4], [4, 8]]], expected: 8, comment: "// 输入：tasks = [[1,2],[2,4],[4,8]]  输出：8" },
  { args: [[[1, 3], [2, 4], [10, 11], [10, 12], [8, 9]]], expected: 32, comment: "// 输入：tasks = [[1,3],[2,4],[10,11],[10,12],[8,9]]  输出：32" },
  { args: [[[1, 7], [2, 8], [3, 9], [4, 10], [5, 11], [6, 12]]], expected: 27, comment: "// 输入：tasks = [[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]]  输出：27" },
];

__lcRunExamples(minimumEffort, __lcExamples);