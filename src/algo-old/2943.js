var maximizeSquareHoleArea = function (n, m, hBars, vBars) {
  hBars = hBars.sort((a, b) => a - b)
  vBars = vBars.sort((a, b) => a - b)
  let maxH = 1
  for (let i = 0; i < hBars.length; i++) {
    let count = 1
    while (i + 1 < hBars.length && hBars[i] + 1 === hBars[i + 1]) {
      count++
      i++
    }
    maxH = Math.max(maxH, count + 1)
  }
  let maxV = 1
  for (let i = 0; i < vBars.length; i++) {
    let count = 1
    while (i + 1 < vBars.length && vBars[i] + 1 === vBars[i + 1]) {
      count++
      i++
    }
    maxV = Math.max(maxV, count + 1)
  }
  let s = Math.min(maxH, maxV)
  return s * s
}

console.log(maximizeSquareHoleArea(2, 1, [2, 3], [2]))
console.log(maximizeSquareHoleArea(1, 1, [2], [2]))
