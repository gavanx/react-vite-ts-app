var maxLength = function (nums) {
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  function multiGCD(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      result = gcd(result, numbers[i]);
    }
    return result;
  }
  function multipleLCM(numArray) {
    let result = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
      result = lcm(result, numArray[i]);
    }
    return result;
  }
  const dfs = (i, j) => {
    
  };
};
