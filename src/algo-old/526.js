var countArrangement = function (n) {
  const memo = Array(1 << n).fill(-1)
  function dfs(s) {
    if (s === (1 << n) - 1) {
      return 1
    }
    if (memo[s] !== -1) {
      return memo[s]
    }
    let res = 0
    const i = bitCount32(s) + 1
    for (let j = 1; j <= n; j++) {
      if (((s >> (j - 1)) & 1) === 0 && (i % j === 0 || j % i === 0)) {
        res += dfs(s | (1 << (j - 1)))
      }
    }
    return (memo[s] = res)
  }
  return dfs(0)
}

function bitCount32(n) {
  n = n - ((n >> 1) & 0x55555555)
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
  return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24
}

console.time('xx')
console.log(bitCount32(991), Number(991).toString(2))
console.timeEnd('xx')
console.time('aa')
console.log(Number(991).toString(2).split('').filter(b => b === '1').length, Number(991).toString(2))
console.timeEnd('aa')







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
  { args: [15], expected: 2, comment: "// 输入：n = 2  输出：2" },
  { args: [2], expected: 2, comment: "// 输入：n = 2  输出：2" },
  { args: [1], expected: 1, comment: "// 输入：n = 1  输出：1" },
];

__lcRunExamples(countArrangement, __lcExamples);