var constructTransformedArray = function (nums) {
  const l = nums.length;
  let n;
  let ans = [];
  for (let i = 0; i < l; i++) {
    n = nums[i];
    if (n > 0) {
      ans[i] = nums[(i + n) % l];
    } else if (n < 0) {
      ans[i] = nums[(l + i - (-n % l)) % l];
    } else {
      ans[i] = n;
    }
  }
  return ans;
};

console.log(constructTransformedArray([-1, 4, -1]));
