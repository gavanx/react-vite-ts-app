var corpFlightBookings = function (bookings, n) {
  // nums 初始化为全 0
  let nums = new Array(n).fill(0)
  // 构造差分解法
  let df = new Difference(nums)

  for (let booking of bookings) {
    // 注意转成数组索引要减一哦
    let i = booking[0] - 1
    let j = booking[1] - 1
    let val = booking[2]
    // 对区间 nums[i..j] 增加 val
    df.increment(i, j, val)
  }
  // 返回最终的结果数组
  return df.result()
}

class Difference {
  // 差分数组
  constructor(nums) {
    this.diff = new Array(nums.length).fill(0)
    // 构造差分数组
    this.diff[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1]
    }
  }

  // 给闭区间 [i, j] 增加 val（可以是负数）
  increment(i, j, val) {
    this.diff[i] += val
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val
    }
  }

  // 根据差分数组构造结果数组
  result() {
    let res = new Array(this.diff.length)
    res[0] = this.diff[0]
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i]
    }
    return res
  }
}

console.log(
  corpFlightBookings(
    [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    5
  )
)

console.log(
  corpFlightBookings(
    [
      [1, 2, 10],
      [2, 2, 15],
    ],
    2
  )
)
