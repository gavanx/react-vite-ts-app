var jump = function (nums) {
  const n = nums.length;
  let maxPos = 0;
  let end = 0;
  let step = 0;
  for (let i = 0; i < n - 1; i++) {
    maxPos = Math.max(maxPos, i + nums[i]);
    if (i === end) {
      end = maxPos;
      step++;
    }
  }
  return step;
};

console.log(jump([2, 3, 1, 1, 4]) === 2);
console.log(jump([2, 3, 0, 1, 4]) === 2);
