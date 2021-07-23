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
  const [N, M] = input[0].split(' ').map((x) => Number(x))

  const visited = new Array(N)
  let output = []
  let result = ''

  const dfs = (cnt) => {
    if (cnt === M) {
      result += `${output.join(' ')}\n`
      return
    }
    for (let i = 0; i < N; i++) {
      if (visited[i] === true) continue
      visited[i] = true
      output.push(i + 1)
      dfs(cnt + 1)
      output.pop()
      visited[i] = false
    }
  }
  dfs(0)
  console.log(result.trim())
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
