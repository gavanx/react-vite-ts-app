var numberOfBeams = function (bank) {
  let ans = 0
  let pre = 0
  for (let i = 0; i < bank.length; i++) {
    let cur = 0
    for (let j = 0; j < bank[i].length; j++) {
      if (bank[i][j] === '1') {
        cur++
      }
    }
    if (cur > 0) {
      ans += pre * cur
      pre = cur
    }
  }
  return ans
}

console.log(numberOfBeams(['011001', '000000', '010100', '001000']))
console.log(numberOfBeams(['000', '111', '000']))
