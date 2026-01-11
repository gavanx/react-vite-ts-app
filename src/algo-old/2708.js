var maxStrength = function (nums) {
  let s1 = 1
  let s2 = 1
  let p = 0
  let n = 0
  let z = 0
  let maxNeg = -Infinity
  for (let x of nums) {
    if (x > 0) {
      p++
      s1 *= x
    } else if (x < 0) {
      s2 *= x
      n++
      maxNeg = Math.max(maxNeg, x)
    } else {
      z++
    }
  }

  if (p > 0) {
    if (s2 < 0) {
      s2 = s2 / maxNeg
    }
    return s1 * s2
  } else {
    if (n > 1) {
      if (s2 < 0) {
        s2 = s2 / maxNeg
      }
      return s2
    } else if (n === 1) {
      return z > 0 ? 0 : maxNeg
    } else {
      return 0
    }
  }
}

console.log(maxStrength([3, -1, -5, 2, 5, -9])) // 1350
console.log(maxStrength([-4, -5, -4])) // 20
console.log(maxStrength([0, -1])) // 0
