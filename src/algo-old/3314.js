var minBitwiseArray = function (nums) {
  const map = new Map()
  for (let i = 1; i < 1000; i++) {
    if (!map.has(i)) {
      map.set(i, i | (i + 1))
    }
  }
  const ans = []
  let flag
  for (const x of nums) {
    flag = false
    for (const [k, v] of map.entries()) {
      if (v === x) {
        flag = true
        ans.push(k)
        break
      }
    }
    if (!flag) {
      ans.push(-1)
    }
  }
  return ans
}

console.log(minBitwiseArray([2, 3, 5, 7]))
console.log(minBitwiseArray([11, 13, 31]))
