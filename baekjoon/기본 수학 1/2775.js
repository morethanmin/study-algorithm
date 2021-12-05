const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const T = parseInt(input[0])
  for (let i = 1; i <= T; i++) {
    //k층
    const k = input[2 * i - 1]
    //n호
    const n = input[2 * i]
    // console.log(`${k}층${n}호`)
    //0층 n호까지의 인원
    let hoN = []
    for (let q = 1; q <= n; q++) {
      hoN.push(q)
    }

    //1층부터 k-1층까지
    for (let j = 1; j < k; j++) {
      let newHoN = [1]
      let sum = 1
      //2호부터 n호까지
      for (let q = 1; q < n; q++) {
        sum += hoN[q]
        newHoN.push(sum)
      }
      hoN = newHoN
    }
    console.log(hoN.reduce((acc, cur) => acc + cur))
  }
  process.exit()
})

/**
 * k n r
 *
 * 0 1 1
 * 0 2 2
 * 0 3 3
 * 0 4 4
 * 0 5 5
 *
 * 1 1 1
 * 1 2 3  1+2
 * 1 3 6  1+2+3
 * 1 4 10 1+2+3+4
 * 1 5 15 1+2+3+4+5
 *
 * 2 1 1
 * 2 2 4  1+3
 * 2 3 10 1+3+6
 * 2 4 20 1+3+6+10
 * 2 5 35 1+3+6+10+15
 *
 * 3 1 1
 * 3 2 5  1+4
 * 3 3 15 1+4+10
 * 3 4 35 1+4+10+20
 * 3 5 70 1+4+10+20+35
 */
