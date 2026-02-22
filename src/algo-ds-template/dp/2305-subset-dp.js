var distributeCookies = function (cookies, k) {
  const n = cookies.length
  const sum = new Array(1 << n).fill(0)
  for (let i = 0; i < n; i++) {
    let b = 1 << i
    for (let j = 0; j < b; j++) {
      sum[b | j] = sum[j] + cookies[i]
    }
  }
  const f = sum.slice()
  for (let i = 1; i < k; i++) {
    for (let j = (1 << n) - 1; j > 0; j--) {
      for (let s = j; s > 0; s = (s - 1) & j) {
        f[j] = Math.min(f[j], Math.max(f[s], sum[j ^ s]))
      }
    }
  }
  return f[(1 << n) - 1]
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
  { args: [[8, 15, 10, 20, 8], 2], expected: 31, comment: "// 输入：cookies = [8,15,10,20,8], k = 2  输出：31" },
  { args: [[6, 1, 3, 2, 2, 4, 1, 2], 3], expected: 7, comment: "// 输入：cookies = [6,1,3,2,2,4,1,2], k = 3  输出：7" },
];

__lcRunExamples(distributeCookies, __lcExamples);