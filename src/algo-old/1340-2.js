var maxJumps = function (arr, d) {
  const n = arr.length
  const memo = new Array(n).fill(-1)
  const dfs = (i) => {
    if (memo[i] !== -1) return memo[i]
    let res = 1

    for (let j = i - 1; j >= Math.max(i - d, 0); j--) {
      if (arr[j] >= arr[i]) break
      res = Math.max(res, dfs(j) + 1)
    }

    for (let j = i + 1; j <= Math.min(i + d, n - 1); j++) {
      if (arr[j] >= arr[i]) break
      res = Math.max(res, dfs(j) + 1)
    }
    memo[i] = res
    return res
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dfs(i))
  }
  return ans
}

console.log(maxJumps([40, 98, 14, 22, 45, 71, 20, 19, 26, 9, 29, 64, 76, 66, 32, 79, 14, 83, 62, 39, 69, 25, 92, 79, 70, 34, 22, 19, 41, 26, 5, 82, 38], 6))
console.log(maxJumps([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2))



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
  { args: [[6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2], expected: 4, comment: "// 输入：arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2  输出：4" },
  { args: [[3, 3, 3, 3, 3], 3], expected: 1, comment: "// 输入：arr = [3,3,3,3,3], d = 3  输出：1" },
  { args: [[7, 6, 5, 4, 3, 2, 1], 1], expected: 7, comment: "// 输入：arr = [7,6,5,4,3,2,1], d = 1  输出：7" },
  { args: [[7, 1, 7, 1, 7, 1], 2], expected: 2, comment: "// 输入：arr = [7,1,7,1,7,1], d = 2  输出：2" },
  { args: [[66], 1], expected: 1, comment: "// 输入：arr = [66], d = 1  输出：1" },
];

__lcRunExamples(maxJumps, __lcExamples);