var passwordStrength = function (password) {
  const s1 = new Set()
  const s2 = new Set()
  const s3 = new Set()
  const s4 = new Set()
  for (const c of password) {
    if (c >= 'a' && c <= 'z') {
      s1.add(c)
    } else if (c >= 'A' && c <= 'Z') {
      s2.add(c)
    } else if (c >= '0' && c <= '9') {
      s3.add(c)
    } else if ('!@#$'.includes(c)) {
      s4.add(c)
    }
  }
  return s1.size + 2 * s2.size + 3 * s3.size + 5 * s4.size
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
  { args: ["aA1!"], expected: 11, comment: "// 输入：password = \"aA1!  输出：11" },
  { args: ["bbB11#"], expected: 11, comment: "// 输入：password = \"bbB11#  输出：11" },
];

__lcRunExamples(passwordStrength, __lcExamples);