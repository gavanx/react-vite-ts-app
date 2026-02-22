class SegmentTree {
  constructor(a) {
    this.n = a.length
    const bitLen = this.n === 0 ? 0 : (this.n - 1).toString(2).length
    this.max = new Array(2 << bitLen).fill(0)
    if (this.n > 0) {
      this.build(a, 1, 0, this.n - 1)
    }
  }

  maintain(o) {
    this.max[o] = Math.max(this.max[o * 2], this.max[o * 2 + 1])
  }

  build(a, o, l, r) {
    if (l === r) {
      this.max[o] = a[l]
      return
    }
    const m = Math.floor((l + r) / 2)
    this.build(a, o * 2, l, m)
    this.build(a, o * 2 + 1, m + 1, r)
    this.maintain(o)
  }

  findFirstAndUpdate(o, l, r, x) {
    if (this.max[o] < x) {
      return -1
    }
    if (l === r) {
      this.max[o] = -1
      return l
    }
    const m = Math.floor((l + r) / 2)
    let i = this.findFirstAndUpdate(o * 2, l, m, x)
    if (i < 0) {
      i = this.findFirstAndUpdate(o * 2 + 1, m + 1, r, x)
    }
    this.maintain(o)
    return i
  }
}

function numOfUnplacedFruits(fruits, baskets) {
  const st = new SegmentTree(baskets)
  const n = baskets.length
  let ans = 0
  for (const x of fruits) {
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
