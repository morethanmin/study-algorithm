const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const T = +input[0]
  for (let i = 1; i <= T; i++) {
    const n = +input[i]
    let sosuList = []
    //1~n까지의 소수 구하기. 1은 제외이므로 2부터 시작.
    for (let j = 2; j <= n; j++) {
      let isSosu = true
      //j의 값이 소수인지 판별하기 위한 for문
      for (let k = 2; k <= Math.sqrt(j); k++) {
        //특정 값으로 나누어 떨어진다면 해당 값은 소수가 아님.
        if (j % k === 0) {
          isSosu = false
          break
        }
      }
      //소수인경우 리스트에 추가
      if (isSosu) {
        sosuList.push(j)
      }
    }

    //소수 리스트에서 합이 n과 같은 경우 찾기.
    let resultList = []
    for (let i = 0; i < sosuList.length - 1; i++) {
      for (let j = i; j < sosuList.length; j++) {
        if (sosuList[i] + sosuList[j] === n) {
          resultList.push([sosuList[i], sosuList[j]])
        }
      }
    }

    //결과 리스트에서 차가 가장 적은 값 출력
    let minDiff = -1,
      idx = -1
    for (let i = 0; i < resultList.length; i++) {
      const diff = resultList[i][1] - resultList[i][0]
      if (minDiff === -1 || minDiff > diff) {
        minDiff = diff
        idx = i
      }
    }
    console.log(resultList[idx].join(' '))
  }
  process.exit()
})
