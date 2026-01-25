var minBitwiseArray = function (nums) {
  const ans = []
  for (let x of nums) {
    if (x % 2 === 0) ans.push(-1)
    else {
      const t = ~x
      ans.push(x ^ ((t & -t) >> 1))
    }
  }
  return ans
}

console.log(minBitwiseArray([2, 3, 5, 7]))
console.log(minBitwiseArray([11, 13, 31]))