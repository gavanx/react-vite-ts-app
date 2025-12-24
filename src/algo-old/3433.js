var countMentions = function (numberOfUsers, events) {
  events.sort(
    (a, b) => parseInt(a[1]) - parseInt(b[1]) || b[0][0].charCodeAt(0) - a[0][0].charCodeAt(0)
  )

  const ans = Array(numberOfUsers).fill(0)
  const onlineT = Array(numberOfUsers).fill(0)
  for (const [type, timestamp, mention] of events) {
    const curT = parseInt(timestamp)
    if (type[0] === 'O') {
      onlineT[parseInt(mention)] = curT + 60
    } else if (mention[0] === 'A') {
      for (let i = 0; i < numberOfUsers; i++) {
        ans[i]++
      }
    } else if (mention[0] === 'H') {
      for (let i = 0; i < numberOfUsers; i++) {
        if (onlineT[i] <= curT) {
          ans[i]++
        }
      }
    } else {
      for (const s of mention.split(' ')) {
        ans[parseInt(s.slice(2))]++
      }
    }
  }
  return ans
}
