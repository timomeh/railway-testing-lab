async function main() {
  console.log('start')
  console.log('do nothing for 5 sec')

  await new Promise(resolve => {
    setTimeout(() => resolve(), 5_000)
  })

  console.log('end')
}

main()