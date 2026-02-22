/**
 * 线段树类（核心功能：找区间内第一个 >= x 的数，找到后更新为 -1 并返回下标）
 */
class SegmentTree {
  constructor(a) {
    this.n = a.length
    // 计算线段树数组大小：对齐 Python 的 (2 << (n - 1).bit_length())
    const bitLen = this.n === 0 ? 0 : (this.n - 1).toString(2).length
    this.max = new Array(2 << bitLen).fill(0)
    // 构建线段树（根节点下标从1开始，与Python一致）
    if (this.n > 0) {
      this.build(a, 1, 0, this.n - 1)
    }
  }

  /**
   * 维护当前节点的最大值（合并左右子节点的最大值）
   * @param {number} o 当前节点下标
   */
  maintain(o) {
    this.max[o] = Math.max(this.max[o * 2], this.max[o * 2 + 1])
  }

  /**
   * 构建线段树
   * @param {number[]} a 原始数组
   * @param {number} o 当前节点下标
   * @param {number} l 当前节点覆盖的左区间
   * @param {number} r 当前节点覆盖的右区间
   */
  build(a, o, l, r) {
    if (l === r) {
      this.max[o] = a[l]
      return
    }
    const m = Math.floor((l + r) / 2)
    // 递归构建左右子树
    this.build(a, o * 2, l, m)
    this.build(a, o * 2 + 1, m + 1, r)
    // 维护当前节点的最大值
    this.maintain(o)
  }

  /**
   * 核心方法：找区间内第一个 >= x 的数，更新为 -1 并返回下标（无则返回 -1）
   * @param {number} o 当前节点下标
   * @param {number} l 当前节点覆盖的左区间
   * @param {number} r 当前节点覆盖的右区间
   * @param {number} x 目标值
   * @returns {number} 找到的下标（-1表示未找到）
   */
  findFirstAndUpdate(o, l, r, x) {
    // 当前区间的最大值 < x，直接返回-1（无符合条件的数）
    if (this.max[o] < x) {
      return -1
    }
    // 叶子节点：找到目标，更新为-1并返回下标
    if (l === r) {
      this.max[o] = -1
      return l
    }
    const m = Math.floor((l + r) / 2)
    // 先查左子树（优先找左侧符合条件的数）
    let i = this.findFirstAndUpdate(o * 2, l, m, x)
    // 左子树没找到，再查右子树
    if (i < 0) {
      i = this.findFirstAndUpdate(o * 2 + 1, m + 1, r, x)
    }
    // 维护当前节点的最大值（子节点已更新，父节点需同步）
    this.maintain(o)
    return i
  }
}

/**
 * 主解题函数：计算未放置的水果数量
 * @param {number[]} fruits 水果数组（每个元素是水果需要的篮子容量）
 * @param {number[]} baskets 篮子数组（每个元素是篮子的容量）
 * @returns {number} 未放置的水果数量
 */
function numOfUnplacedFruits(fruits, baskets) {
  // 处理边界：篮子为空时，所有水果都无法放置
  if (baskets.length === 0) {
    return fruits.length
  }
  const st = new SegmentTree(baskets)
  const n = baskets.length
  let ans = 0
  // 遍历每个水果，尝试找符合条件的篮子
  for (const x of fruits) {
    // 调用线段树方法，根节点从1开始，区间是0到n-1
    if (st.findFirstAndUpdate(1, 0, n - 1, x) < 0) {
      ans++
    }
  }
  return ans
}

// ---------------- 测试示例 ----------------
// 测试用例1：基础功能验证
const fruits1 = [3, 2, 4]
const baskets1 = [1, 3, 5]
console.log(numOfUnplacedFruits(fruits1, baskets1)) // 输出：0
// 解释：
// 水果3 → 找第一个>=3的篮子（下标1，容量3），更新为-1；
// 水果2 → 找第一个>=2的篮子（下标2，容量5），更新为-1；
// 水果4 → 无符合条件的篮子？不，下标2更新前是5，满足>=4，所以全部放置，ans=0

// 测试用例2：存在未放置的水果
const fruits2 = [5, 5, 5]
const baskets2 = [3, 4, 4]
console.log(numOfUnplacedFruits(fruits2, baskets2)) // 输出：3（所有篮子都<5，无法放置）

// 测试用例3：部分放置
const fruits3 = [2, 3, 1, 4]
const baskets3 = [2, 2, 3]
console.log(numOfUnplacedFruits(fruits3, baskets3))
// 解释：
// 水果2 → 下标0（2）→ 更新为-1；
// 水果3 → 下标2（3）→ 更新为-1；
// 水果1 → 下标1（2）→ 更新为-1；
// 水果4 → 无符合条件的篮子 → ans=1；
// 输出：1
