var minimumOperations = function (nums) {
  const cal = (a, s, l, sum) => {
    let n1 = a[s],
      n2 = a[s + 1],
      n3 = a[s + 2];
    if (l >= 3) {
      if (n1 === n2 || n2 === n3 || n3 === n1) {
        return cal(a, s + 3, l - 3, sum + 1);
      }
      for (let i = 3; i < l; i++) {
        if (a[s + i] === n1 || a[s + i] === n2 || a[s + i] === n3) {
          return cal(a, s + 3, l - 3, sum + 1);
        }
      }
      if (l > 3) {
        if (new Set(a.slice(s + 3)).size === l - 3) {
          return sum;
        } else {
          return cal(a, s + 3, l - 3, sum + 1);
        }
      }
      return sum;
    } else if (l === 2) {
      return sum + (n1 === n2 ? 1 : 0);
    } else {
      return sum;
    }
  };
  return cal(nums, 0, nums.length, 0);
};

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]) === 2);
console.log(minimumOperations([4, 5, 6, 4, 4]) === 2);
console.log(minimumOperations([6, 7, 8, 9]) === 0);
console.log(minimumOperations([5, 7, 11, 12, 12]) === 2);
console.log(minimumOperations([8, 7, 9, 3, 7, 14, 13]) === 1);
