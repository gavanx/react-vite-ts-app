var getLongestSubsequence = function (words, groups) {
  const n = words.length;
  let last = groups[0];
  const ans = [words[0]];
  for (let i = 1; i < n; i++) {
    if (groups[i] !== last) {
      last = groups[i];
      ans.push(words[i]);
    }
  }
  return ans;
};

console.log(getLongestSubsequence(["e", "a", "b"], [0, 0, 1]));
console.log(getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1]));
