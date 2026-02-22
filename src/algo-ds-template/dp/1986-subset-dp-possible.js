var minSessions = function (tasks, sessionTime) {
  const n = tasks.length
  const m = 1 << n
  const sum = new Array(m).fill(0)
  for (let i = 0; i < n; i++) {
    let b = 1 << i
    for (let j = 0; j < b; j++) {
      sum[j | b] = sum[j] + tasks[i]
    }
  }
  const f = new Array(m).fill(n)
  f[0] = 0
  for (let s = 0; s < m; s++) {
    for (let sub = s; sub > 0; sub = (sub - 1) & s) {
      if (sum[sub] <= sessionTime) {
        f[s] = Math.min(f[s], f[s ^ sub] + 1)
      }
    }
  }

  return f[m - 1]
}



const CASE_SLOW_MS = 20;
const TOTAL_SLOW_MS = 100;

function __lcRunExamples(fn, cases) {
  let totalMs = 0;
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
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;';
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut });
      const slow = ms > CASE_SLOW_MS;
      const timeStyle = slow ? 'color:#d97706;font-weight:700;background:#fff7ed;padding:2px 4px;border-radius:4px;' : 'color:#64748b;';
      console.log(`%c${i + 1} ⏱: ${ms.toFixed(3)}ms`, timeStyle, `\n`);
    } catch (e) {
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
  console.log(`%c⏱ total: ${totalMs.toFixed(3)}ms`, totalStyle);
}

const __lcExamples = [
  { args: [[1, 2, 3], 3], expected: 2, comment: "// 输入：tasks = [1,2,3], sessionTime = 3  输出：2" },
  { args: [[3, 1, 3, 1, 1], 8], expected: 2, comment: "// 输入：tasks = [3,1,3,1,1], sessionTime = 8  输出：2" },
  { args: [[1, 2, 3, 4, 5], 15], expected: 1, comment: "// 输入：tasks = [1,2,3,4,5], sessionTime = 15  输出：1" },
];

__lcRunExamples(minSessions, __lcExamples);