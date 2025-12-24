/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
  const reverseNum = (num) => {
    let reversed = 0
    let original = Math.abs(num)

    while (original > 0) {
      reversed = reversed * 10 + (original % 10)
      original = Math.floor(original / 10)
    }

    return reversed
  }

  const reversed = reverseNum(n)
  return Math.abs(n - reversed)
}

console.log(mirrorDistance(123)) // 198
console.log(mirrorDistance(25)) // 198
