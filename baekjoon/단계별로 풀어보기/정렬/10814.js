const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const handleInput = (line) => {
  input.push(line)
}

const handleOutput = () => {
  const N = Number(input[0])
  let user = []
  for(let i = 1; i<=N; i++){
    const [id, name] = 
    user.push({id: })
  }
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
