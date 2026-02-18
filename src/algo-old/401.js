var readBinaryWatch = function (turnedOn) {
  const h = [1, 2, 4, 8]
  const m = [1, 2, 4, 8, 16, 32]
  if (turnedOn >= 9) {
    return []
  }
  const res = []
  for (let i = 0; i < Math.min(turnedOn, 4); i++) {
    const j = turnedOn - i
    if (j > 6) {
      continue
    }
    
  }
}
