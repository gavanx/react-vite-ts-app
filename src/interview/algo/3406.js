var isPossibleToSplit = function (nums) {
  const a = new Set();
  const b = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!a.has(nums[i])) {
      a.add(nums[i]);
      continue;
    } else if (!b.has(nums[i])) {
      b.add(nums[i]);
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]) === true);
console.log(isPossibleToSplit([1, 1, 1, 1]) === false);
