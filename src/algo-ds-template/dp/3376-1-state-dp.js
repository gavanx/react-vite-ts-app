var findMinimumTime = function (strength, k) {
  const n = strength.length
  const all = (1 << n) - 1
  const cache = new Map()
  const dfs = (s, e, x) => {
    if (s === all) {
      return 0
    }
    const key = `${s}-${e}-${x}`
    if (cache.has(key)) {
      return cache.get(key)
    }
    let res = Infinity
    for (let j = 0; j < n; j++) {
      if (((s >> j) & 1) === 0) {
        if (strength[j] > e) {
          const time = Math.ceil((strength[j] - e) / x)
          res = Math.min(res, time + dfs(s | (1 << j), 0, x + k))
        } else {
          res = Math.min(res, dfs(s | (1 << j), 0, x + k))
        }
      }
    }
    cache.set(key, res)
    return res
  }
  return dfs(0, 0, 1)
}
console.log(findMinimumTime([3], 8))


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
  { args: [[3, 4, 1], 1], expected: 4, comment: "// 输入：strength = [3,4,1], K = 1  输出：4" },
  { args: [[2, 5, 4], 2], expected: 5, comment: "// 输入：strength = [2,5,4], K = 2  输出：5" },
];

__lcRunExamples(findMinimumTime, __lcExamples);