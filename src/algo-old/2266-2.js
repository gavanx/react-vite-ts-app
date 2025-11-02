var countTexts = function (pressedKeys) {
  const n = pressedKeys.length
  const a = [[pressedKeys[0], 1]]
  const mod = 1e9 + 7
  const base = [1, 1, 2, 4]
  const c1 = new Map()
  const c2 = new Map()
  for (let i = 1; i < n; i++) {
    if (a[a.length - 1][0] !== pressedKeys[i]) {
      a.push([pressedKeys[i], 1])
    } else {
      a[a.length - 1][1]++
    }
  }
  const dfs = (t, forth) => {
    if (t < 0) {
      return 1
    }
    if (t < base.length) {
      return base[t]
    }
    if (forth && c1.has(t)) {
      return c1.get(t)
    }
    if (!forth && c2.has(t)) {
      return c2.get(t)
    }
    const ret =
      (dfs(t - 1, forth) +
        dfs(t - 2, forth) +
        dfs(t - 3, forth) +
        (forth ? dfs(t - 4, forth) : 0)) %
      mod
    if (forth) {
      c1.set(t, ret)
    } else {
      c2.set(t, ret)
    }
    return ret
  }
  let ans = 1
  for (const [v, c] of a) {
    console.log(v, c)
    if (v === '7' || v === '9') {
      ans *= dfs(c, true)
    } else {
      ans *= dfs(c, false)
    }
    ans %= mod
  }
  console.log(c2, ans)
  return ans
}

// console.log(countTexts('22233') === 8)
// console.log(countTexts('222222222222222222222222222222222222') === 82876089)
// console.log(countTexts('55555555999977779555') === 20736)
// console.log(countTexts('7777') === 8)
// console.log(countTexts('2222') === 7)
console.log(countTexts('2222') === 7)

// console.log(
//   countTexts(
//     '88888888888888888888888888888999999999999999999999999999994444444444444444444444444444488888888888888888888888888888555555555555555555555555555556666666666666666666666666666666666666666666666666666666666222222222222222222222222222226666666666666666666666666666699999999999999999999999999999888888888888888888888888888885555555555555555555555555555577777777777777777777777777777444444444444444444444444444444444444444444444444444444444433333333333333333333333333333555555555555555555555555555556666666666666666666666666666644444444444444444444444444444999999999999999999999999999996666666666666666666666666666655555555555555555555555555555444444444444444444444444444448888888888888888888888888888855555555555555555555555555555555555555555555555555555555555555555555555555555555555999999999999999555555555555555555555555555554444444444444444444444444444444555'
//   ) === 886136986
// )
