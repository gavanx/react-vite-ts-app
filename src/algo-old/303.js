/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.s = Array(nums.length + 1)
  this.s[0] = 0
  for (let i = 0; i < nums.length; i++) {
    this.s[i + 1] = this.s[i] + nums[i]
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.s[right + 1] - this.s[left]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
