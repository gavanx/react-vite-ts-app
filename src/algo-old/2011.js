var finalValueAfterOperations = function (operations) {
  const map = {
    '++X': 1,
    'X++': 1,
    '--X': -1,
    'X--': -1,
  }
  let res = 0
  for (let op of operations) {
    res += map[op]
  }
  return res
}
