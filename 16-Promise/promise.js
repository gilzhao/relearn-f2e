// Basic usage of promise
/* function sleep(duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, duration)
  })
} */

// sleep(1000).then(()=>console.log('finished'))

// Promise
/* var r = new Promise(function(resolve, reject) {
  console.log('a')
  resolve()
})
r.then(() => console.log('c'))
console.log('b') */

// Promise setTimeout
/* var r = new Promise(function(resolve, reject){
  console.log('a')
  resolve()
})
setTimeout(() => console.log('d'))
r.then(() => console.log('c'))
console.log('b') */

// Promise take 1s, setTimeout
/* setTimeout(() => console.log('d'))
var r = new Promise(function(resolve, reject){
  resolve()
})
r.then(() => {
  var begin = Date.now()
  while(Date.now() - begin < 1000);
  console.log('c1')
  new Promise(function(resolve, reject){
    resolve()
  }).then(() => console.log('c2'))
}) */

// Promise encapsulates setTimeout
function sleep(duration) {
  return new Promise(function(resolve, reject) {
    console.log('b')
    setTimeout(resolve, duration)
  })
}
console.log('a')
sleep(5000).then(() => console.log('c'))
