var maxSumDivThree = function (nums) {
  let s = 0,
    min11 = Infinity,
    min12 = Infinity,
    min21 = Infinity,
    min22 = Infinity,
    mod
  for (const x of nums) {
    s += x
    mod = x % 3
    if (mod === 1) {
      if (x < min11) {
        min12 = min11
        min11 = x
      } else if (x < min12) {
        min12 = x
      }
    } else if (mod === 2) {
      if (x < min21) {
        min22 = min21
        min21 = x
      } else if (x < min22) {
        min22 = x
      }
    }
  }
  mod = s % 3
  if (mod === 0) {
    return s
  } else if (mod === 1) {
    return Math.max(s - min11, s - min21 - min22)
  } else {
    return Math.max(s - min21, s - min11 - min12)
  }
}

console.log(maxSumDivThree([3, 6, 5, 1, 8])) // 18
console.log(maxSumDivThree([4])) // 0
console.log(maxSumDivThree([1, 2, 3, 4, 4])) // 12
