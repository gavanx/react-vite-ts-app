var isSubstringPresent = function (s) {
  const s2 = s.split("").reverse().join("");
  const l = s.length - 1;
  for (let i = 0; i < l; i++) {
    if (s2.includes(s.substr(i, 2))) return true;
  }
  return false;
};

console.log(isSubstringPresent("leetcode"));
console.log(isSubstringPresent("abcba"));
console.log(isSubstringPresent("abcd"));
