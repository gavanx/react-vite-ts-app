var minJumps = function (arr) {
  const n = arr.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.get(arr[i]).add(i)
    } else {
      map.set(arr[i], new Set([i]))
    }
  }
  const vis = new Array(n).fill(false)
  let q = [0]
  let ans = 0
  while (q.length > 0) {
    const q2 = []
    for (const i of q) {
      vis[i] = true
      if (i == n - 1) {
        return ans
      }
      if (i + 1 < n && !vis[i + 1]) {
        q2.push(i + 1)
      }
      if (i - 1 >= 0 && !vis[i - 1]) {
        q2.push(i - 1)
      }
      const s = map.get(arr[i])
      if (s && s.size > 0) {
        for (const j of s) {
          if (!vis[j]) {
            q2.push(j)
          }
        }
      }
      map.delete(arr[i])
    }
    ans += 1
    q = q2
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
  { args: [[100, -23, -23, 404, 100, 23, 23, 23, 3, 404]], expected: 3, comment: "// 输入：arr = [100,-23,-23,404,100,23,23,23,3,404]  输出：3" },
  { args: [[7]], expected: 0, comment: "// 输入：arr = [7]  输出：0" },
  { args: [[7, 6, 9, 6, 9, 6, 9, 7]], expected: 1, comment: "// 输入：arr = [7,6,9,6,9,6,9,7]  输出：1" },
];

__lcRunExamples(minJumps, __lcExamples);