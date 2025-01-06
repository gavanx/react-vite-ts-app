var canJump = function (nums) {
  const n = nums.length;
  let farthest = 0;
  for (let i = 0; i < n; i++) {
    if (i <= farthest) {
      farthest = Math.max(farthest, i + nums[i]);
      if (farthest >= n - 1) {
        return true;
      }
    } else {
      return false;
    }
  }
  return false;
};

console.log(canJump([2, 3, 1, 1, 4]) === true);
console.log(canJump([3, 2, 1, 0, 4]) === false);
