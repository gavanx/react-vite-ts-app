/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
  // 第一步：计算最大坐标值，确定线段树范围
  let maxVal = 0
  for (const q of queries) {
    maxVal = Math.max(maxVal, q[1])
  }
  const m = maxVal + 1
  const size = 2 << m.toString(2).length // 等价于 m.bit_length()
  const tree = new Array(size).fill(0) // 线段树数组

  // 线段树更新：把 i 处的值改成 val
  function update(o, l, r, i, val) {
    if (l === r) {
      tree[o] = val
      return
    }
    const mid = Math.floor((l + r) / 2)
    if (i <= mid) {
      update(o * 2, l, mid, i, val)
    } else {
      update(o * 2 + 1, mid + 1, r, i, val)
    }
    tree[o] = Math.max(tree[o * 2], tree[o * 2 + 1])
  }

  // 线段树查询：[0, R] 区间最大值
  function query(o, l, r, R) {
    if (r <= R) {
      return tree[o]
    }
    const mid = Math.floor((l + r) / 2)
    if (R <= mid) {
      return query(o * 2, l, mid, R)
    }
    return Math.max(tree[o * 2], query(o * 2 + 1, mid + 1, r, R))
  }

  // 手动实现有序列表（替代 Python SortedList）
  // bisectLeft：二分查找插入位置
  function bisectLeft(arr, target) {
    let left = 0,
      right = arr.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] < target) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    return left
  }

  // 初始化有序集合：哨兵 [0, m]
  const sortedList = [0, m]
  const ans = []

  // 处理所有查询
  for (const q of queries) {
    const x = q[1]
    const idx = bisectLeft(sortedList, x)
    const pre = sortedList[idx - 1] // 左侧最近障碍物

    if (q[0] === 1) {
      // 操作1：添加障碍物
      const nxt = sortedList[idx] // 右侧最近障碍物
      // 插入到有序数组
      sortedList.splice(idx, 0, x)
      // 更新线段树
      update(1, 0, m, x, x - pre)
      update(1, 0, m, nxt, nxt - x)
    } else {
      // 操作2：查询是否满足长度 >= sz
      const maxGap = Math.max(query(1, 0, m, pre), x - pre)
      ans.push(maxGap >= q[2])
    }
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
  { args: [[[1, 2], [2, 3, 3], [2, 3, 1], [2, 2, 2]]], expected: [false, true, true], comment: "// 输入：queries = [[1,2],[2,3,3],[2,3,1],[2,2,2]]  输出：[false,true,true]" },
  { args: [[[1, 7], [2, 7, 6], [1, 2], [2, 7, 5], [2, 7, 6]]], expected: [true, true, false], comment: "// 输入：queries = [[1,7],[2,7,6],[1,2],[2,7,5],[2,7,6]]  输出：[true,true,false]" },
];

__lcRunExamples(getResults, __lcExamples);