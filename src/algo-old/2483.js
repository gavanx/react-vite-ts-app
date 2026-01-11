var bestClosingTime = function (customers) {
  const n = customers.length
  let totalY = 0
  for (let c of customers) {
    if (c === 'Y') {
      totalY++
    }
  }
  let totalN = n - totalY
  let leftY = 0
  let leftN = 0
  let minP = Infinity
  let minJ = n
  let tmpP
  for (let i = 0; i <= n; i++) {
    tmpP = leftN + totalY - leftY
    if (minP > tmpP) {
      minP = tmpP
      minJ = i
    }
    if (customers[i] === 'Y') {
      leftY++
    } else {
      leftN++
    }
  }
  return minJ
}

console.log(bestClosingTime('YYNY'))
console.log(bestClosingTime('NNNNNN'))
console.log(bestClosingTime('YYYY'))
