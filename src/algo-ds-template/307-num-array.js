class NumArray {
  constructor(nums) {
    const n = nums.length
    this.nums = Array(n).fill(0)
    this.tree = Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
      this.update(i, nums[i])
    }
  }

  update(index, val) {
    const delta = val - this.nums[index]
    this.nums[index] = val
    for (let i = index + 1; i < this.tree.length; i += i & -i) {
      this.tree[i] += delta
    }
  }

  prefixSum(i) {
    let s = 0
    // i -= i & -i 的另一种写法
    for (; i > 0; i &= i - 1) {
      s += this.tree[i]
    }
    return s
  }

  sumRange(left, right) {
    return this.prefixSum(right + 1) - this.prefixSum(left)
  }
}
