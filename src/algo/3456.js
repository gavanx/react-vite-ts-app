var hasSpecialSubstring = function (s, k) {
  let len = s.length;
  let end = len - k + 1;
  let sub;
  for (let i = 0; i < end; i++) {
    sub = Array.from({ length: k }, () => s[i]).join('');
    if (s.includes(sub) && s[i - 1] !== s[i] && s[i + k] != s[i]) {
      return true;
    }
  }
  return false;
};

console.log(hasSpecialSubstring('aaabaaa', 3) === true);
console.log(hasSpecialSubstring('abc', 2) === false);
console.log(hasSpecialSubstring('h', 1) === true);
console.log(hasSpecialSubstring('jkjhfgg', 2) === true);
console.log(hasSpecialSubstring('ccc', 2) === false);
console.log(hasSpecialSubstring('aaabaaa', 3) === true);
