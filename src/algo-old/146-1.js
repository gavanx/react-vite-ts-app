var countSubarrays = function (nums) {
  const l = nums.length - 2;
  let sum = 0;
  for (let i = 0; i < l; i++) {
    if ((nums[i] + nums[i + 2]) * 2 === nums[i + 1]) {
      sum += 1;
    }
  }
  return sum;
};
console.log(countSubarrays([1, 2, 3, 4, 5]) === 0);
console.log(countSubarrays([1, 2, 1, 4, 1]) === 1);
console.log(countSubarrays([1, 1, 1]) === 0);
