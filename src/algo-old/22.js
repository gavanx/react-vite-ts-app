var generateParenthesis = function (n) {
  let f = ['()'];
  let s = new Set();
  for (let i = 2; i <= n; i++) {
    s.clear();
    f.forEach((last) => {
      s.add(`()${last}`);
      s.add(`(${last})`);
      s.add(`${last}()`);
    });
    f = [...s];
  }
  return f;
};

[   
  '(())(())',   
];
[        
];

// console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
