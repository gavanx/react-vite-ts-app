/**
 * 线段树（区间求和 + 单点更新）
 * @param {number[]} nums 原始数组
 */
class SegmentTree {
  constructor(nums) {
    this.n = nums.length
    this.tree = new Array(4 * this.n).fill(0) // 开4倍空间足够
    this.build(0, 0, this.n - 1, nums)
  }

  /**
   * 构建线段树
   * @param {number} node 当前节点下标
   * @param {number} l 当前节点覆盖的左区间
   * @param {number} r 当前节点覆盖的右区间
   * @param {number[]} nums 原始数组
   */
  build(node, l, r, nums) {
    if (l === r) {
      this.tree[node] = nums[l]
      return
    }
    const mid = Math.floor((l + r) / 2)
    // 递归构建左右子树
    this.build(2 * node + 1, l, mid, nums)
    this.build(2 * node + 2, mid + 1, r, nums)
    // 合并左右子树的结果
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2]
  }

  /**
   * 单点更新
   * @param {number} idx 原始数组中要更新的下标
   * @param {number} val 新值（注意：这里是替换，若要增量更新需修改逻辑）
   * @param {number} node 当前节点下标
   * @param {number} l 当前节点覆盖的左区间
   * @param {number} r 当前节点覆盖的右区间
   */
  update(idx, val, node = 0, l = 0, r = this.n - 1) {
    if (l === r) {
      this.tree[node] = val
      return
    }
    const mid = Math.floor((l + r) / 2)
    if (idx <= mid) {
      this.update(idx, val, 2 * node + 1, l, mid)
    } else {
      this.update(idx, val, 2 * node + 2, mid + 1, r)
    }
    // 更新当前节点的值
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2]
  }

  /**
   * 区间查询
   * @param {number} ql 查询左区间
   * @param {number} qr 查询右区间
   * @param {number} node 当前节点下标
   * @param {number} l 当前节点覆盖的左区间
   * @param {number} r 当前节点覆盖的右区间
   * @returns {number} 查询结果
   */
  query(ql, qr, node = 0, l = 0, r = this.n - 1) {
    // 查询区间完全覆盖当前节点区间
    if (ql <= l && r <= qr) {
      return this.tree[node]
    }
    const mid = Math.floor((l + r) / 2)
    let res = 0
    // 左子树有交集
    if (ql <= mid) {
      res += this.query(ql, qr, 2 * node + 1, l, mid)
    }
    // 右子树有交集
    if (qr > mid) {
      res += this.query(ql, qr, 2 * node + 2, mid + 1, r)
    }
    return res
  }
}

// 测试示例（可直接在LeetCode中使用）
function test() {
  const nums = [1, 3, 5, 7, 9, 11]
  const st = new SegmentTree(nums)
  console.log(st.query(0, 2)) // 1+3+5=9
  st.update(1, 4) // 将下标1的值从3改成4
  console.log(st.query(0, 2)) // 1+4+5=10
}
test()
