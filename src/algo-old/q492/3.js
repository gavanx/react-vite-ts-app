var minOperations = function (s) {
  const n = s.length
  if (n === 1) {
    return 0
  } else if (n === 2) {
    return s[0] > s[1] ? -1 : 0
  } else {
    if (s === s.split('').sort().join('')) {
      return 0
    }
    let mn = [-1, 256]
    let mx = [-1, -1]
    let x
    for (let i = 0; i < n; i++) {
      x = s.charCodeAt(i)
      if (mn[1] > x) {
        mn = [i, x]
      }
      if (mx[1] <= x) {
        mx = [i, x]
      }
    }
    mn = mn[0]
    mx = mx[0]

    if (mn === 0) {
      if (mx === n - 1) {
        return 1
      } else if (mx > 0) {
        return 1
      }
    } else if (mn === n - 1) {
      if (mx === 0) {
        return 2 + (s[mx] === s[n - 2] ? 0 : 1)
      } else if (mx < n - 1) {
        return 2
      }
    } else {
      if (mx === 0) {
        return 1 + (s[mx] === s[n - 1] ? 0 : 1)
      } else if (mx === n - 1) {
        return 1
      } else {
        return 2
      }
    }
  }
  return 0
}

console.log(minOperations('gfigi')) // 1
console.log(minOperations('oool')) // 2
console.log(minOperations('omo')) // 1


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
  { args: ["dog"], expected: 1, comment: "// 输入：s = \"dog  输出：1" },
  { args: ["card"], expected: 2, comment: "// 输入：s = \"card  输出：2" },
  { args: ["gf"], expected: -1, comment: "// 输入：s = \"gf  输出：-1" },
];

__lcRunExamples(minOperations, __lcExamples);