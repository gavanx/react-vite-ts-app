var longestPalindrome = function (s) {
  const n = s.length;
  if (n === 1) {
    return s;
  } else if (n === 2) {
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  }
  let start, end;
  let max = 0;
  const dfs = (i, j) => {
    if (i >= j) {
      return false;
    }
    if (s[i] === s[j]) {
      if (dfs(i + 1, j - 1)) {
        if (max < j - i + 1) {
          start = i;
          end = j;
          max = j - i + 1;
        }
        return true;
      }
    }
    if (i < j) {
      dfs(i + 1, j);
      dfs(i, j - 1);
    }
    return false;
  };
  dfs(0, s.length - 1);
  const ret = s.substring(start, end + 1);
  console.log(s, ret, start, end);
  return ret;
};

console.log(longestPalindrome("babad") === "aba");
console.log(longestPalindrome("cbbd") === "bb");
console.log(longestPalindrome("ac") === "a");
console.log(longestPalindrome("abb") === "bb");
