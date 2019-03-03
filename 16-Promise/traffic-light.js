function sleep(duration) {
  return new Promise(function(resolve, reject){
    setTimeout(resolve, duration)
  })
}

async function lightColor(time, color) {
  console.log(color)
  await sleep(time)
}

async function main() {
  while(true) {
    await lightColor(3000, 'green')
    await lightColor(1000, 'yellow')
    await lightColor(2000, 'red')
  }
}

main()
