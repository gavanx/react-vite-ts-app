var numberOfWays = function (corridor) {
  const MOD = 1_000_000_007
  let ans = 1,
    cntS = 0,
    lastS = 0

  for (let i = 0; i < corridor.length; i++) {
    if (corridor[i] === 'S') {
      cntS++
      if (cntS >= 3 && cntS % 2) {
        ans = (ans * (i - lastS)) % MOD
      }
      lastS = i
    }
  }

  if (cntS === 0 || cntS % 2) {
    return 0
  }
  return ans
}
