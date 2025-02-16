const work = () => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('work ' + Date.now())
    }, 3000)
  })
  return p
}

const a = [1, 2, 3, 4, 5]

const main = async () => {
  for (let i of a) {
    const res = await work()
    console.log(i, res)
  }
}
const main2 = async () => {
  for (let i = 0; i < a.length; i++) {
    const res = await work()
    console.log(i, res)
  }
}

main2()
