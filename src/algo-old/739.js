var dailyTemperatures = function (temperatures) {
  const n = temperatures.length
  const ans = Array(n).fill(0)
  const st = []
  for (let i = 0; i < n; i++) {
    const t = temperatures[i]
    while (st.length && t > temperatures[st[st.length - 1]]) {
      const j = st.pop()
      ans[j] = i - j
    }
    st.push(i)
  }
  return ans
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30, 40, 50, 60]))
console.log(dailyTemperatures([30, 60, 90]))
