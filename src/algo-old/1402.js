var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b);
  let sum = 0;
  let ans = 0;
  for (let i = satisfaction.length - 1; i >= 0; i--) {
    sum += satisfaction[i];
    if (sum < 0) {
      break;
    }
    ans += sum;
  }
  return ans;
};

console.log(maxSatisfaction([-1, -8, 0, 5, -9]) === 14);
console.log(maxSatisfaction([4, 3, 2]) === 20);
console.log(maxSatisfaction([-1, -4, -5]) === 0);
console.log(maxSatisfaction([-2, 5, -1, 0, 3, -3]) === 35);
