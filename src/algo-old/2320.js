var countHousePlacements = function (n) {
  const mod = 1000000007n
  let f = 1n
  let t = 1n
  let tmp
  for (let i = 1; i < n; i++) {
    tmp = f
    f = (f + t) % mod
    t = tmp
  }
  const s = (t + f) % mod
  return Number((s * s) % mod)
}

// console.log(countHousePlacements(1) === 4)
console.log(countHousePlacements(2) === 9)
console.log(countHousePlacements(1000) === 500478595)
