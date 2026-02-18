var toggleLightBulbs = function (bulbs) {
  const b = new Array(101).fill(false)
  for (const i of bulbs) {
    b[i] = !b[i]
  }
  const res = []
  for (let i = 1; i <= 100; i++) {
    if (b[i]) {
      res.push(i)
    }
  }
  return res
}
console.log(toggleLightBulbs([10, 30, 20, 10]))
