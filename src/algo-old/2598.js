var findSmallestInteger = function (nums, value) {
  const m = new Map()
  for (const num of nums) {
    const mod = ((num % value) + value) % value
    m.set(mod, (m.get(mod) || 0) + 1)
  }
  console.log(m)
  let ans = 0
  let tmp
  while (true) {
    tmp = ans % value
    if (!m.has(tmp)) return ans
    m.set(tmp, m.get(tmp) - 1)
    if (m.get(tmp) === 0) m.delete(tmp)
    ans++
  }
  return ans
}

// console.log(findSmallestInteger([1, -10, 7, 13, 6, 8], 5) === 4)
// console.log(findSmallestInteger([1, -10, 7, 13, 6, 8], 7) === 2)
console.log(findSmallestInteger([3, 0, 3, 2, 4, 2, 1, 1, 0, 4], 5))
//3 => 2, 0 => 2, 2 => 2, 4 => 2, 1 => 2
