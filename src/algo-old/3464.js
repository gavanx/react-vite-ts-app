/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (side, points, k) {
  const a = []
  for (const [x, y] of points) {
    if (x === 0) {
      a.push(y)
    } else if (y === side) {
      a.push(side + x)
    } else if (x === side) {
      a.push(3 * side - y)
    } else {
      a.push(4 * side - x)
    }
  }
  a.sort((a, b) => a - b)

  const bisectLeft = (arr, target) => {
    let left = 0,
      right = arr.length
    while (left < right) {
      const mid = (left + right) >> 1
      if (arr[mid] < target) left = mid + 1
      else right = mid
    }
    return left
  }

  const check = (low) => {
    const totalLen = 4 * side
    for (const start of a) {
      const end = start + totalLen - low
      let cur = start
      let ok = true
      for (let i = 0; i < k - 1; i++) {
        const j = bisectLeft(a, cur + low)
        if (j === a.length || a[j] > end) {
          ok = false
          break
        }
        cur = a[j]
      }
      if (ok) return true
    }
    return false
  }

  let left = 1
  let right = Math.floor((4 * side) / k) + 1
  while (left + 1 < right) {
    const mid = (left + right) >> 1
    if (check(mid)) {
      left = mid
    } else {
      right = mid
    }
  }
  return left
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
  { args: [2, [[0, 2], [2, 0], [2, 2], [0, 0]], 4], expected: 2, comment: "// 输入：side = 2, points = [[0,2],[2,0],[2,2],[0,0]], k = 4  输出：2" },
  { args: [2, [[0, 0], [1, 2], [2, 0], [2, 2], [2, 1]], 4], expected: 1, comment: "// 输入：side = 2, points = [[0,0],[1,2],[2,0],[2,2],[2,1]], k = 4  输出：1" },
  { args: [2, [[0, 0], [0, 1], [0, 2], [1, 2], [2, 0], [2, 2], [2, 1]], 5], expected: 1, comment: "// 输入：side = 2, points = [[0,0],[0,1],[0,2],[1,2],[2,0],[2,2],[2,1]], k = 5  输出：1" },
];

__lcRunExamples(maxDistance, __lcExamples);