var minSwaps = function (nums) {
  const n = nums.length
  const om = []
  const em = []
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      em.push(i)
    } else {
      om.push(i)
    }
  }
  if (Math.abs(om.length - em.length) > 1) return -1
  const f = (m) => {
    let ans = 0
    let i2 = 0
    for (let i of m) {
      ans += Math.abs(i2 - i)
      i2 += 2
    }
    return ans
  }
  if (om.length > em.length) {
    return f(om)
  } else if (om.length < em.length) {
    return f(em)
  } else {
    return Math.min(f(om), f(em))
  }
}

console.log(minSwaps([2, 4, 6, 5, 7]))
console.log(minSwaps([2, 4, 5, 7]))
console.log(minSwaps([1, 2, 3]))
