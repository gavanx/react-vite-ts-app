console.log('start script')
setTimeout(() => console.log('setTimeout'), 0)
new Promise((resolve) => {
  console.log('promise 1')
  resolve()
}).then(() => {
  console.log('promise 2')
}).then(() => {
  console.log('promise 3')
})
Promise.resolve().then(() => console.log('promise 4'))
console.log('script end')

// start script
// promise 1
// script end
// promise 2
// promise 4
// promise 3
// setTimeout