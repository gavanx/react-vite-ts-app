var addSpaces = function (s, spaces) {
  const last = spaces.length - 1;
  let r = s.substring(spaces[last]);
  for (let i = last - 1; i >= 0; i--) {
    const c = s.substring(spaces[i], spaces[i + 1]);
    r = c + ' ' + r;
  }
  return s.substring(0, spaces[0]) + ' ' + r;
};

console.log(addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15]));
console.log(addSpaces('icodeinpython', [1, 5, 7, 9]));
console.log(addSpaces('spacing', [0, 1, 2, 3, 4, 5, 6]));
console.log(addSpaces('p', [0]));
