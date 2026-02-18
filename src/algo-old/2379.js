var minimumRecolors = function (blocks, k) {
  let cnt = 0
  let max
  for (let i = 0; i < blocks.length; i++) {
    if (i < k) {
      if (blocks[i] === 'B') {
        cnt += 1
      }
      if (i === k - 1) {
        max = cnt
      }
    } else {
      if (blocks[i] === 'B') {
        cnt += 1
      }
      if (blocks[i - k] === 'B') {
        cnt -= 1
      }
      max = Math.max(max, cnt)
    }
  }
  return k - max
}
console.log(minimumRecolors('WBBWWBBWBW', 7))
