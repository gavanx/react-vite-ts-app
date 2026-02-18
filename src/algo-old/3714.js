/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
  const n = s.length
  let ans = 0
  let i = 0

  // 处理只有一种字母的情况
  while (i < n) {
    const start = i
    i += 1
    while (i < n && s[i] === s[i - 1]) {
      i += 1
    }
    ans = Math.max(ans, i - start)
  }

  // 处理两种字母的情况
  function f(x, y) {
    let i = 0
    while (i < n) {
      const pos = new Map()
      pos.set(0, i - 1) // 前缀和数组的首项是 0，位置相当于在 i-1
      let d = 0 // x 的个数减去 y 的个数
      while (i < n && (s[i] === x || s[i] === y)) {
        d += s[i] === x ? 1 : -1
        if (pos.has(d)) {
          ans = Math.max(ans, i - pos.get(d))
        } else {
          pos.set(d, i)
        }
        i += 1
      }
      i += 1
    }
  }

  f('a', 'b')
  f('a', 'c')
  f('b', 'c')

  // 处理三种字母的情况
  const pos = new Map()
  pos.set('0,0', -1) // 用字符串作为键，替代Python的元组
  const cnt = {
    a: 0,
    b: 0,
    c: 0,
  }

  for (let i = 0; i < n; i++) {
    const b = s[i]
    cnt[b] += 1
    // 计算两个差值，拼接成字符串作为键
    const p1 = cnt['a'] - cnt['b']
    const p2 = cnt['b'] - cnt['c']
    const key = `${p1},${p2}`

    if (pos.has(key)) {
      ans = Math.max(ans, i - pos.get(key))
    } else {
      pos.set(key, i)
    }
  }

  return ans
}

// 测试示例
console.log(longestBalanced('abbac')) // 输出 4
console.log(longestBalanced('aabcc')) // 输出 3
console.log(longestBalanced('aba')) // 输出 2
