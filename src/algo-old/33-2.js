/**
 * 在旋转排序数组中查找目标值
 * @param {number[]} nums 旋转排序的整数数组
 * @param {number} target 要查找的目标值
 * @return {number} 找到返回索引，未找到返回 -1
 */
var search = function (nums, target) {
  if (nums.length === 0) {
    return -1
  }
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    }

    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[nums.length - 1]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}

// 测试用例
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 输出: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // 输出: -1
console.log(search([1], 1)) // 输出: 0
console.log(search([1, 3], 3)) // 输出: 1
function __lcRunExamples(fn, cases) {
  for (let i = 0; i < cases.length; i++) {
    const { args, expected, comment } = cases[i]
    if (comment) console.log(comment)
    try {
      const got = fn(...args)
      const gotOut = Array.isArray(got) ? got.join() : got
      const expectedOut = Array.isArray(expected) ? expected.join() : expected
      const ok = gotOut === expectedOut
      const color = ok ? 'color: #16a34a; font-weight: 700;' : 'color: #dc2626; font-weight: 700;'
      console.log(`%c${i + 1} ${ok ? 'OK' : 'FAIL'}`, color, { got: gotOut, expected: expectedOut })
    } catch (e) {
      console.log(`%c${i + 1} ERROR`, 'color: #dc2626; font-weight: 700;', { error: String(e) })
    }
  }
}

const __lcExamples = [
  {
    args: [[4, 5, 6, 7, 0, 1, 2], 0],
    expected: 4,
    comment: '// 输入：nums = [4,5,6,7,0,1,2], target = 0  输出：4',
  },
  {
    args: [[4, 5, 6, 7, 0, 1, 2], 3],
    expected: -1,
    comment: '// 输入：nums = [4,5,6,7,0,1,2], target = 3  输出：-1',
  },
  { args: [[1], 0], expected: -1, comment: '// 输入：nums = [1], target = 0  输出：-1' },
]

__lcRunExamples(search, __lcExamples)
