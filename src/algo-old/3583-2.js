/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
  const MOD = 1_000_000_007
  const cnt1 = new Map()
  const cnt12 = new Map()
  let cnt123 = 0

  for (const x of nums) {
    if (x % 2 === 0) {
      const half = x / 2
      cnt123 = (cnt123 + (cnt12.get(half) || 0)) % MOD
    }

    const double = x * 2
    const cnt12Val = (cnt12.get(x) || 0) + (cnt1.get(double) || 0)
    cnt12.set(x, cnt12Val % MOD)

    cnt1.set(x, ((cnt1.get(x) || 0) + 1) % MOD)
  }

  return cnt123 % MOD
}

console.log(specialTriplets([6, 3, 6]))
console.log(specialTriplets([0, 1, 0, 0]))
console.log(specialTriplets([8, 4, 2, 8, 4]))
