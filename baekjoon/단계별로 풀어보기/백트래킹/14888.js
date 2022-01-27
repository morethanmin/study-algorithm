const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const inputs = []

const solution = (nums, operators) => {
  const N = nums.length - 1
  // 실제 합을 저장하기 위해 정의
  const values = []
  // 연산자 순서를 저장하기 위해 정의 (value는 0~3 사이의 값. 0은 더하기, 1은 빼기, 2은 곱하기, 3은 나누기)
  const order = new Array(N)

  //해당 자리에 연산자를 넣을 수 있는지 확인한다.
  const isPromising = (idx) => {
    if (idx === 0) return true
    //해당 자리의 연산자 값을 구한다.
    const operator = order[idx]
    // 사용할수있는 오퍼레이터 개수 >= 실제 사용되는 오퍼레이터 개수
    return operators[operator] >= order.filter((el) => el === operator).length
  }
  const getValue = (n) => {

    //해당 자리에 연산자를 넣을 수 있는 경우
    if (isPromising(n)) {
      //마지막까지 도달한 경우
      if (n === N) {
        //value 를 구하는 로직
        let calVal = nums[0]
        for (let i = 1; i < nums.length; i++) {
          if (order[i] === 0)
            calVal += nums[i]
          else if (order[i] === 1)
            calVal -= nums[i]
          else if (order[i] === 2)
            calVal *= nums[i]
          else if (order[i] === 3) {
            const nngVal = Math.floor(+calVal / +nums[i])
            if ((calVal > 0 && nums[i] > 0) || (calVal < 0 && nums[i] < 0)) calVal = nngVal
            else calVal = -nngVal
          }
        }
        values.push(calVal)
      }
      //마지막이 아닌 경우
      else {
        //모든 연산자 다 넣어본다.
        for (let operator = 0; operator < 4; operator++) {
          order[n + 1] = operator
          getValue(n + 1)
          order[n + 1] = -1
        }
      }
    }
  }
  getValue(0)
  return `${Math.max(...values)}\n${Math.min(...values)}`
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  // 수의 개수
  const N = +inputs.shift()
  // 수의 값
  const NUMS = inputs.shift().split(' ').map((el) => Number(el))
  // 덧셈의 개수, 뻴셈의 개수, 곱셈의 개수, 나눗셈의 개수
  const OPERATORS = inputs.shift().split(' ').map((el) => Number(el))
  console.log(solution(NUMS, OPERATORS));

  process.exit()
})