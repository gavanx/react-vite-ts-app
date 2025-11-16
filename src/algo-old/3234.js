var numberOfSubstrings = function (s) {
  const pos0 = [-1]
  let total1 = 0
  let ans = 0
  for (let r = 0; r < s.length; r++) {
    if (s[r] === '0') {
      pos0.push(r)
    } else {
      total1++
      ans += r - pos0[pos0.length - 1]
    }

    const m = pos0.length
    for (let i = m - 1; i > 0 && (m - i) * (m - i) <= total1; i--) {
      const p = pos0[i - 1],
        q = pos0[i]
      const cnt0 = m - i
      const cnt1 = r - q + 1 - cnt0
      ans += Math.max(q - Math.max(cnt0 * cnt0 - cnt1, 0) - p, 0)
    }
  }
  return ans
}
