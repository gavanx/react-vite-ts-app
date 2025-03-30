var maxSubArray = function (nums) {
  const n = nums.length;
  let ans = nums[0],
    sum = nums[0];
  for (let i = 1; i < n; i++) {
    sum += nums[i];
    if (sum < 0 || sum < nums[i]) {
      sum = nums[i];
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
