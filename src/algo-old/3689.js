var maxTotalValue = function (nums, k) {
  let mn = Infinity,
    mx = -Infinity
  for (let x of nums) {
    if (mn > x) {
      mn = x
    }
    if (mx < x) {
      mx = x
    }
  }
  return k * (mx - mn)
}
