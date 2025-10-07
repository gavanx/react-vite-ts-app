function countStableSubsequences(nums) {
  const MOD = 10 ** 9 + 7
  let c1 = [0, 0]
  let c2 = [
    [0, 0],
    [0, 0],
  ]

  for (const num of nums) {
    const z = num % 2
    const tmp1 = [...c1]
    const tmp2 = [[...c2[0]], [...c2[1]]]

    c1[z] = (c1[z] + 1) % MOD

    for (let x = 0; x <= 1; x++) {
      c2[x][z] = (c2[x][z] + tmp1[x]) % MOD
    }

    for (let x = 0; x <= 1; x++) {
      for (let y = 0; y <= 1; y++) {
        if (!(x === y && y === z)) {
          c2[y][z] = (c2[y][z] + tmp2[x][y]) % MOD
        }
      }
    }
  }

  const total = (c1[0] + c1[1] + c2[0][0] + c2[0][1] + c2[1][0] + c2[1][1]) % MOD
  return total
}

console.log(countStableSubsequences([1, 3, 5]))
console.log(countStableSubsequences([2, 3, 4, 2]))
