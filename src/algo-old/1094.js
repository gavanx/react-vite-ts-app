var carPooling = function (trips, capacity) {
  const nums = new Array(1001).fill(0)
  const df = new Difference(nums)
  for (const trip of trips) {
    const val = trip[0]
    const i = trip[1]
    const j = trip[2] - 1
    df.increment(i, j, val)
  }

  const res = df.result()
  for (let i = 0; i < res.length; i++) {
    if (capacity < res[i]) {
      return false
    }
  }
  return true
}

class Difference {
  constructor(nums) {
    this.diff = [...nums]
    this.diff[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1]
    }
  }

  increment(i, j, val) {
    this.diff[i] += val
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val
    }
  }

  result() {
    const res = new Array(this.diff.length)
    res[0] = this.diff[0]
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i]
    }
    return res
  }
}

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    4
  )
)

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    5
  )
)
