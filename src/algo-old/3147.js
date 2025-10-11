var maximumEnergy = function (energy, k) {
  const n = energy.length
  let ans = -Number.MAX_SAFE_INTEGER
  for (let i = n - 1; i >= n - k; i--) {
    let sum = 0
    for (let j = i; j >= 0; j -= k) {
      sum += energy[j]
      ans = Math.max(ans, sum)
    }
  }
  return ans
}

// console.log(maximumEnergy([5, 2, -10, -5, 1], 3))
// console.log(maximumEnergy([-2, -3, -1], 2))
console.log(maximumEnergy([8, -5], 1))
