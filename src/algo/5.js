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
    if (i === j) {
      if (max < 1) {
        start = end = i;
        max = 1;
      }
      return true;
    } else if (i + 1 === j) {
      if (s[i] === s[j]) {
        if (max < 2) {
          start = i;
          end = j;
          max = 2;
        }
        return true;
      }
      return false;
    }
    if (s[i] === s[j]) {
      if (dfs(i + 1, j - 1)) {
        start = i;
        end = j;
        return true;
      }
    }
    return false;
  };
  dfs(0, s.length - 1);
  return s.substring(start, end + 1);
};

console.log(longestPalindrome("babad") === "aba");
console.log(longestPalindrome("cbbd") === "bb");
console.log(longestPalindrome("ac") === "a");
console.log(longestPalindrome("abb") === "bb");
