function sleep(duration) {
  return new Promise(function(resolve, reject){
    setTimeout(resolve, duration)
  })
}

// Basic usage of promise
/* async function foo() {
  console.log('a')
  await sleep(2000)
  console.log('b')
  foo()
} */

// The async function combination
async function foo(name) {
  await sleep(2000)
  console.log(name)
}

async function foo2() {
  await foo('a')
  await foo('b')
}

foo2()
