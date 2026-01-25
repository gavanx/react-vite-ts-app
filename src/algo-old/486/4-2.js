function nthSmallest(n, k) {
  function comb(n, k) {
    if (k === 0 || k === n) return 1
    if (k === 1 || k === n - 1) return n
    k = Math.min(k, n - k)
    let result = 1
    for (let i = 0; i < k; i++) {
      result = result * (n - i)
      result = result / (i + 1)
    }
    return result
  }

  let ans = 0
  for (let i = 49; i >= 0; i--) {
    const c = comb(i, k)
    console.log(`C(${i}, ${k}) = ${c}`)
    if (n > c) {
      n -= c
      ans |= 1 << i
      k -= 1
      if (k === 0) {
        return ans
      }
    }
  }
  return ans
}

// 示例1：计算第3小的具有2个1的二进制数
// 二进制数：3(11), 5(101), 6(110), 9(1001)...
// 第3小：6(110) = 6
// console.log(Number(nthSmallest(3, 2))) // 6

// // 示例2：计算第1小的具有3个1的二进制数
// // 7(111) = 7
// console.log(Number(nthSmallest(1, 3))) // 7

// // 处理大数示例
// console.log(nthSmallest(100, 10).toString()) // 大数结果

// console.log(Number(nthSmallest(4, 2))) // 9
// console.log(Number(nthSmallest(3, 1))) // 4
console.log(Number(nthSmallest(1, 2))) // 4
