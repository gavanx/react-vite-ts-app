/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {
  // 基线条件：长度≤2时直接返回（如"10"已是最大）
  if (s.length <= 2) {
    return s
  }

  // 存储拆分后的合法子串
  const substrings = []
  let diff = 0 // 1的数量 - 0的数量（模拟括号的平衡值）
  let start = 0 // 子串起始索引

  // 遍历字符串，拆分出所有最小合法子串
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '1') {
      diff++
    } else {
      diff--
      // 当diff=0时，[start, i]是一个完整的合法子串
      if (diff === 0) {
        // 去掉外层的1和0，递归处理内部，再重新包裹
        const inner = makeLargestSpecial(s.slice(start + 1, i))
        substrings.push(`1${inner}0`)
        // 更新下一个子串的起始位置
        start = i + 1
      }
    }
  }

  // 降序排序子串，拼接后得到最大字符串
  substrings.sort((a, b) => b.localeCompare(a))
  return substrings.join('')
}

// 测试示例
console.log(makeLargestSpecial('11011000')) // 输出 "11100100"
console.log(makeLargestSpecial('1010')) // 输出 "1100"
