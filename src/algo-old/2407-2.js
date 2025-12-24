var lengthOfLIS = function (nums, k) {
  const u = Math.max(...nums)
  const mx = new Array(4 * u).fill(0)

  // 更新线段树节点
  const modify = (o, l, r, i, val) => {
    if (l === r) {
      mx[o] = val
      return
    }
    const m = Math.floor((l + r) / 2)
    if (i <= m) modify(o * 2, l, m, i, val)
    else modify(o * 2 + 1, m + 1, r, i, val)
    mx[o] = Math.max(mx[o * 2], mx[o * 2 + 1])
  }

  // 查询区间 [L, R] 内的最大值
  const query = (o, l, r, L, R) => {
    if (L <= l && r <= R) return mx[o]
    let res = 0
    const m = Math.floor((l + r) / 2)
    if (L <= m) res = query(o * 2, l, m, L, R)
    if (R > m) res = Math.max(res, query(o * 2 + 1, m + 1, r, L, R))
    return res
  }

  for (const x of nums) {
    if (x === 1) {
      modify(1, 1, u, 1, 1)
    } else {
      const res = 1 + query(1, 1, u, Math.max(x - k, 1), x - 1)
      modify(1, 1, u, x, res)
    }
  }
  return mx[1]
}

console.log(lengthOfLIS([4, 2, 1, 4, 3, 4, 5, 8, 15], 3))
console.log(lengthOfLIS([7, 4, 5, 1, 8, 12, 4, 7], 5))
console.log(lengthOfLIS([1, 5], 1))
