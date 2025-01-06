async function foo() {
  console.log('1');

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('2');
      resolve();
    }, 0);
  });

  console.log('3');
}

foo().then(() => {
  console.log('4');
});

console.log('5');