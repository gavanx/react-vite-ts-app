var massage = function (nums) {
  const l = nums.length;
  if (l === 0) {
    return 0;
  }
  const f = Array.from({ length: l }, () => [0, 0]);
  f[0][0] = 0;
  f[0][1] = nums[0];
  for (let i = 1; i < l; i++) {
    f[i][0] = Math.max(f[i - 1][0], f[i - 1][1]);
    f[i][1] = f[i - 1][0] + nums[i];
  }
  return Math.max(f[l - 1][0], f[l - 1][1]);
};

console.log(massage([1, 2, 3, 1]));
console.log(massage([2, 7, 9, 3, 1]));
console.log(massage([2, 1, 4, 5, 3, 1, 1, 3]));
console.log(massage([]));
console.log(massage([1]));
