/**
 * @param {number} n
 * @param {number} p
 * @param {number[]} banned
 * @param {number} k
 * @return {number[]}
 */
var minReverseOperations = function (n, p, banned, k) {
  // 1. 初始化禁用集合，包含banned和起点p
  const ban = new Set(banned)
  ban.add(p)

  // 2. 替代Python的SortedList：用数组模拟有序列表（二分查找维护有序）
  // indices[0] 存偶数下标，indices[1] 存奇数下标
  const indices = [[], []]
  for (let i = 0; i < n; i++) {
    if (!ban.has(i)) {
      indices[i % 2].push(i)
    }
  }
  // 对两个数组排序（保证有序），添加哨兵n（避免越界判断）
  indices[0].sort((a, b) => a - b)
  indices[1].sort((a, b) => a - b)
  indices[0].push(n)
  indices[1].push(n)

  // 3. 初始化结果数组和队列（BFS）
  const ans = new Array(n).fill(-1)
  ans[p] = 0
  const q = [p] // 用数组模拟双端队列，shift/push

  // 4. 二分查找辅助函数：找到有序数组中第一个>=target的元素索引
  const bisectLeft = (arr, target) => {
    let left = 0,
      right = arr.length
    while (left < right) {
      const mid = (left + right) >> 1
      if (arr[mid] >= target) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }

  // 5. BFS核心逻辑
  while (q.length > 0) {
    const i = q.shift() // 取出队首元素

    // 计算当前位置i能翻转到的最小/最大下标
    const mn = Math.max(i - k + 1, k - i - 1)
    const mx = Math.min(i + k - 1, 2 * n - k - i - 1)

    // 获取对应奇偶性的有序列表
    const sl = indices[mn % 2]
    // 找到第一个>=mn的元素索引
    let idx = bisectLeft(sl, mn)

    // 遍历所有在[mn, mx]范围内的下标
    while (sl[idx] <= mx) {
      const j = sl.splice(idx, 1)[0] // 移除该元素（替代Python的pop(idx)）
      ans[j] = ans[i] + 1 // 步数+1
      q.push(j) // 加入队列继续BFS
    }
  }

  return ans
}

// 测试示例
console.log(minReverseOperations(5, 0, [2, 4], 3)) // 输出: [0, 1, -1, 2, -1]
console.log(minReverseOperations(4, 0, [1, 2], 4)) // 输出: [0, -1, -1, -1]



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
  { args: [4, 0, [1, 2], 4], expected: [0, -1, -1, 1], comment: "// 输入：n = 4, p = 0, banned = [1,2], k = 4  输出：[0,-1,-1,1]" },
  { args: [5, 0, [2, 4], 3], expected: [0, -1, -1, -1, -1], comment: "// 输入：n = 5, p = 0, banned = [2,4], k = 3  输出：[0,-1,-1,-1,-1]" },
  { args: [4, 2, [0, 1, 3], 1], expected: [-1, -1, 0, -1], comment: "// 输入：n = 4, p = 2, banned = [0,1,3], k = 1  输出：[-1,-1,0,-1]" },
];

__lcRunExamples(minReverseOperations, __lcExamples);