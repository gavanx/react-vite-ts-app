var pairSum = function (head) {
  const a = []
  let i = 0
  while (head) {
    a[i++] = head.val
    head = head.next
  }
  let ans = 0
  const n = a.length
  for (let i = 0; i < n / 2; i++) {
    ans = Math.max(ans, a[i] + a[n - 1 - i])
  }
  return ans
}
