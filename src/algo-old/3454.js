class SegmentTree {
  constructor(xs) {
    this.n = xs.length - 1 // xs.length 个横坐标有 xs.length-1 个差值
    const size = 2 << (32 - Math.clz32(this.n - 1))
    this.minCoverLen = new Array(size).fill(0)
    this.minCover = new Array(size).fill(0)
    this.todo = new Array(size).fill(0)
    this.build(xs, 1, 0, this.n - 1)
  }

  update(l, r, v) {
    this._update(1, 0, this.n - 1, l, r, v)
  }

  getUncoveredLength() {
    return this.minCover[1] === 0 ? this.minCoverLen[1] : 0
  }

  // 根据左右儿子的信息，更新当前节点的信息
  maintain(o) {
    const mn = Math.min(this.minCover[o * 2], this.minCover[o * 2 + 1])
    this.minCover[o] = mn
    // 只统计等于 mn 的底边长之和
    this.minCoverLen[o] =
      (this.minCover[o * 2] === mn ? this.minCoverLen[o * 2] : 0) +
      (this.minCover[o * 2 + 1] === mn ? this.minCoverLen[o * 2 + 1] : 0)
  }

  // 仅更新节点信息，不下传懒标记 todo
  do(o, v) {
    this.minCover[o] += v
    this.todo[o] += v
  }

  // 下传懒标记 todo
  spread(o) {
    if (this.todo[o] !== 0) {
      this.do(o * 2, this.todo[o])
      this.do(o * 2 + 1, this.todo[o])
      this.todo[o] = 0
    }
  }

  // 建树
  build(xs, o, l, r) {
    if (l === r) {
      this.minCoverLen[o] = xs[l + 1] - xs[l]
      return
    }
    const m = Math.floor((l + r) / 2)
    this.build(xs, o * 2, l, m)
    this.build(xs, o * 2 + 1, m + 1, r)
    this.maintain(o)
  }

  // 区间更新
  _update(o, l, r, ql, qr, v) {
    if (ql <= l && r <= qr) {
      this.do(o, v)
      return
    }
    this.spread(o)
    const m = Math.floor((l + r) / 2)
    if (ql <= m) {
      this._update(o * 2, l, m, ql, qr, v)
    }
    if (m < qr) {
      this._update(o * 2 + 1, m + 1, r, ql, qr, v)
    }
    this.maintain(o)
  }
}

class Solution {
  separateSquares(squares) {
    const n = squares.length * 2
    const xs = new Array(n).fill(0)
    const events = new Array(n).fill(null)

    // 构建事件和横坐标
    let idx = 0
    for (const sq of squares) {
      const lx = sq[0]
      const y = sq[1]
      const l = sq[2]
      const rx = lx + l
      xs[idx] = lx
      xs[idx + 1] = rx
      events[idx] = { y, lx, rx, delta: 1 }
      events[idx + 1] = { y: y + l, lx, rx, delta: -1 }
      idx += 2
    }

    // 排序，方便离散化
    xs.sort((a, b) => a - b)

    // 去重
    const uniqueXs = [...new Set(xs)]

    // 初始化线段树
    const t = new SegmentTree(uniqueXs)

    // 模拟扫描线从下往上移动
    events.sort((a, b) => a.y - b.y)

    const records = new Array(n - 1)
    let totArea = 0

    for (let i = 0; i < n - 1; i++) {
      const e = events[i]
      const l = uniqueXs.indexOf(e.lx)
      const r = uniqueXs.indexOf(e.rx) - 1
      t.update(l, r, e.delta)

      const sumLen = uniqueXs[uniqueXs.length - 1] - uniqueXs[0] - t.getUncoveredLength()
      records[i] = { area: totArea, sumLen }

      // 新增面积 = 被至少一个矩形覆盖的底边长之和 * 矩形高度
      totArea += BigInt(sumLen) * BigInt(events[i + 1].y - e.y)
    }

    // 找最后一个 < totArea / 2 的面积
    const halfArea = totArea / 2n
    let i = 0
    while (i < n - 1 && BigInt(records[i].area) * 2n < totArea) {
      i++
    }
    i--

    if (i < 0) {
      // 特殊情况：第一个记录就已经超过一半
      return events[0].y
    }

    const remainingArea = totArea - BigInt(records[i].area) * 2n
    return events[i].y + Number(remainingArea) / (records[i].sumLen * 2.0)
  }
}

// 使用示例
function main() {
  const solution = new Solution()

  // 测试用例
  const squares = [
    [0, 0, 5], // 左下角(0,0)，边长5
    [3, 3, 4], // 左下角(3,3)，边长4
    [1, 2, 3], // 左下角(1,2)，边长3
  ]

  const result = solution.separateSquares(squares)
  console.log(`分割线位置: ${result}`)
  return result
}

// 辅助函数：计算最高位0的数量（模拟Java的Integer.numberOfLeadingZeros）
Math.clz32 =
  Math.clz32 ||
  function (x) {
    if (x === 0) return 32
    let n = 0
    if ((x & 0xffff0000) === 0) {
      n += 16
      x <<= 16
    }
    if ((x & 0xff000000) === 0) {
      n += 8
      x <<= 8
    }
    if ((x & 0xf0000000) === 0) {
      n += 4
      x <<= 4
    }
    if ((x & 0xc0000000) === 0) {
      n += 2
      x <<= 2
    }
    if ((x & 0x80000000) === 0) {
      n += 1
    }
    return n
  }

// 测试代码
const solution = new Solution()

// 单个正方形
const test1 = [[0, 0, 10]]
console.log(solution.separateSquares(test1)) // 应该在高度5左右

// 两个不重叠的正方形
const test2 = [
  [0, 0, 5],
  [10, 0, 5],
]
console.log(solution.separateSquares(test2))

// 重叠的正方形
const test3 = [
  [0, 0, 5],
  [2, 2, 5],
]
console.log(solution.separateSquares(test3))
