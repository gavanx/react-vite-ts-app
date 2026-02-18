/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length
  if (n === 1) {
    return s
  }
  let c,
    max = 0,
    left,
    right,
    start,
    end
  const expand = (i) => {
    c = s[i]
    left = i - 1
    right = i + 1
    while (c === s[left]) {
      left--
    }
    while (c === s[right]) {
      right++
    }
    while (s[left] === s[right] && left >= 0 && right < n) {
      left--
      right++
    }
    if (max < right - left - 1) {
      max = right - left - 1
      start = left + 1
      end = right - 1
    }
  }
  for (let i = 0; i < n; i++) {
    expand(i)
  }
  return s.substring(start, end + 1)
}
