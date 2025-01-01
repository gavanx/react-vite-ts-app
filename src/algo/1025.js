var divisorGame = function (n) {
  const map = new Map();
  let tmp;
  const dfs = (n, isAlice) => {
    if (n === 1) {
      return !isAlice;
    }
    if (map.has(n)) {
      return map.get(n);
    }
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        tmp = dfs(n - i, !isAlice);
        map.set(n - i, tmp);
        return tmp;
      }
    }
    map.set(n, false);
    return false;
  };
  return dfs(n, true);
};

console.log(divisorGame(2) === true);
console.log(divisorGame(3) === false);
