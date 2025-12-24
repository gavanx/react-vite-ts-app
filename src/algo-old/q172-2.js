var maxTripletSum = function (nums) {
  const mod0 = [],
    mod1 = [],
    mod2 = []
  for (const num of nums) {
    if (num % 3 === 0) mod0.push(num)
    else if (num % 3 === 1) mod1.push(num)
    else mod2.push(num)
  }

  mod0.sort((a, b) => b - a)
  mod1.sort((a, b) => b - a)
  mod2.sort((a, b) => b - a)

  let maxSum = 0

  if (mod0.length >= 3) {
    maxSum = Math.max(maxSum, mod0[0] + mod0[1] + mod0[2])
  }

  if (mod1.length >= 3) {
    maxSum = Math.max(maxSum, mod1[0] + mod1[1] + mod1[2])
  }

  if (mod2.length >= 3) {
    maxSum = Math.max(maxSum, mod2[0] + mod2[1] + mod2[2])
  }

  if (mod0.length > 0 && mod1.length > 0 && mod2.length > 0) {
    maxSum = Math.max(maxSum, mod0[0] + mod1[0] + mod2[0])
  }

  return maxSum
}

console.log(maxTripletSum([4, 2, 3, 1]))