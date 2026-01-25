var alternatingXOR = function (nums, target1, target2) {
  const n = nums.length
  const pre = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] ^ nums[i]
  }
  const dfs = (i, f) => {
    if (i === n) {
      return f === target2 ? 1 : 0
    }
    let res = 0
    for (let j = i + 1; j <= n; j++) {
      if (pre[j] ^ (pre[i] === f)) {
        res += dfs(j, f === target1 ? target2 : target1)
      }
    }
    return res
  }

  return dfs(0, target1)
}

console.log(alternatingXOR([2, 3, 1, 4], 1, 5))
console.log(alternatingXOR([1, 0, 0], 1, 0))
