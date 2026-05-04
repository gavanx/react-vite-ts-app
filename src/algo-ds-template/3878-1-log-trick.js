/**
 * @param {number[]} nums
 * @return {number}
 */
var countGoodSubarrays = function (nums) {
  let or_left = []
  let last = {}
  let ans = 0

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    last[x] = i

    for (let p of or_left) {
      p[0] |= x
    }
    or_left.push([x, i])

    let idx = 1
    for (let j = 1; j < or_left.length; j++) {
      if (or_left[j][0] !== or_left[j - 1][0]) {
        or_left[idx] = or_left[j]
        idx++
      }
    }
    or_left.splice(idx)

    for (let k = 0; k < or_left.length; k++) {
      const [or_val, left] = or_left[k]
      const right = k < or_left.length - 1 ? or_left[k + 1][1] - 1 : i
      const j = last.hasOwnProperty(or_val) ? last[or_val] : -1

      if (j >= left) {
        ans += Math.min(right, j) - left + 1
      }
    }
  }

  return ans
}

// 测试示例（可直接运行验证）
console.log(countGoodSubarrays([1, 2, 3])) // 可根据实际预期值调整
console.log(countGoodSubarrays([3, 1, 2])) // 测试不同输入
