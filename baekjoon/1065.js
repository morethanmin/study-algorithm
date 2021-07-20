const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const isHansu = (n) => {
  const ns = `${n}`
  if (ns.length === 1) return true
  let dis = []
  for (let i = 0; i < ns.length - 1; i++) {
    dis.push(ns[i] - ns[i + 1])
  }
  if (new Set(dis).size === 1) return true
  return false
}
const handleInput = (line) => {
  input = Number(line)
}
const handleOutput = () => {
  let count = 0
  for (let i = 1; i <= input; i++) {
    if (isHansu(i)) {
      count++
    }
  }
  console.log(count)
}

rl.on('line', handleInput).on('close', handleOutput)
