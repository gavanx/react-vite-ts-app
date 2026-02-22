var countNumbersWithUniqueDigits = function (n) {
  const m = n
  const memo = Array.from({ length: m }, () => Array(1 << 10).fill(-1))
  const dfs = (i, mask, limit, hasNum) => {
    if (i === m) {
      return hasNum ? 1 : 0
    }
    if (!limit && hasNum && memo[i][mask] != -1) {
      return memo[i][mask]
    }
    let res = 0
    if (!hasNum) {
      res += dfs(i + 1, mask, false, false)
    }
    const up = limit ? s[i] : 9
    for (let d = hasNum ? 0 : 1; d <= up; d++) {
      if ((mask & (1 << d)) === 0) {
        res += dfs(i + 1, mask | (1 << d), limit && d === up, true)
      }
    }
    if (!limit && hasNum) {
      memo[i][mask] = res
    }
    return res
  }
  return dfs(0, 0, false, false) + 1
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
  { args: [2], expected: 91, comment: "// 输入：n = 2  输出：91" },
  { args: [0], expected: 1, comment: "// 输入：n = 0  输出：1" },
];

__lcRunExamples(countNumbersWithUniqueDigits, __lcExamples);