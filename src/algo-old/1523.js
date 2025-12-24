var countOdds = function (low, high) {
  return Math.floor((high + 1) / 2) - Math.floor(low / 2)
}

console.log(countOdds(3, 7))

console.log(countOdds(8, 10))
