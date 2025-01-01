var occurrencesOfElement = function (nums, queries, x) {
  let l = nums.length;
  let i,
    j = 1,
    k,
    a = [],
    b = [];
  for (i = 0; i < l; i++) {
    if (nums[i] === x) {
      a[j++] = i;
    }
  }

  l = queries.length;
  for (i = 0; i < l; i++) {
    k = a[queries[i]];
    b[i] = k === undefined ? -1 : k;
  }
  return b;
};

console.log(occurrencesOfElement([1, 3, 1, 7], [1, 3, 2, 4], 1));
console.log(occurrencesOfElement([1, 2, 3], [10], 5));
