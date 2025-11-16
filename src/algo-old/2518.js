var countPartitions = function (nums, k) {
  const n = nums.length
  let s = 0
  for (let x of nums) {
    s += x
  }
  if (s < k * 2) {
    return 0
  }
  const MOD = 1e9 + 7
  const memo = Array.from({ length: n }, () => Array.from({ length: k }, () => -1))
  const dp = (i, s1, s2) => {
    if (i === n) {
      return s1 >= k && s2 >= k ? 1 : 0
    }
    let key = `${i},${s1},${s2}`
    if (map.has(key)) {
      return map.get(key)
    }
    const ans = (dp(i + 1, s1 + nums[i], s2) + dp(i + 1, s1, s2 + nums[i])) % MOD
    map.set(key, ans)
    return ans
  }
  return dp(0, 0, 0)
}

console.log(countPartitions([1, 2, 3, 4], 4))
console.log(countPartitions([3, 3, 3], 4))
console.log(countPartitions([6, 6], 2))
console.log(
  countPartitions(
    [
      478, 721, 51, 352, 361, 66, 22, 807, 59, 275, 114, 169, 855, 103, 509, 592, 769, 384, 670,
      764, 382, 466, 69, 787, 69, 217, 992, 37, 805, 842, 760, 515, 442, 77, 660, 449, 471, 752,
      743, 947, 616, 246, 46, 973, 860, 264, 852, 675, 139, 60, 368, 554, 723, 350, 870, 710, 966,
      633, 99, 146, 175, 659, 941, 592, 614, 221, 775, 76, 228, 372, 430, 521, 248, 591, 683, 600,
      439, 58, 653, 810, 206, 488, 714, 531, 383, 251, 566, 448, 580, 627, 689, 818, 525, 321, 127,
      499, 440,
    ],
    634
  )
)
