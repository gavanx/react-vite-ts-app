var rob = function (nums) {
  var rob1 = function (nums) {
    const n = nums.length;
    const a = Array(n).fill(0);
    a[0] = nums[0];
    a[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
      a[i] = Math.max(a[i - 1], a[i - 2] + nums[i]);
    }
    return a[n - 1];
  };
  if (nums.length === 1) {
    return nums[0];
  }
  return Math.max(rob1(nums.slice(0, nums.length - 1)), rob1(nums.slice(1)));
};

console.log(rob([2, 3, 2]) === 3);
console.log(rob([1, 2, 3, 1]) === 4);
console.log(rob([1, 2, 3]) === 3);
