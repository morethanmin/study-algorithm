const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = +input.shift()
  const array = input.map((i) => Number(i))
  const sortedArray = array.sort((a, b) => a - b)
  const result = []
  //산술평균
  //  값들의 합을 구한 뒤, 개수만큼 나눈걸 반올림/내림한다.
  result.push(
    Math.round(sortedArray.reduce((acc, cur) => acc + cur, 0) / array.length)
  )
  //중앙값
  //  2로 나눈 값을 반내림한 값으로 값을 구한다.
  result.push(sortedArray[Math.floor(array.length / 2)])

  //최빈값
  //  map자료구조에 각 값들의 빈도수를 입력한다.
  const counts = sortedArray.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})
  //  가장 높은 빈도수를 구한다.
  const maxCount = Math.max.apply(null, Object.values(counts))
  //  가장 높은 빈도수를 가진 값들을 구한다.
  let maxCounts = []
  for (let key in counts) {
    if (counts[key] === maxCount) maxCounts.push(key)
  }
  //  1보다 큰 경우 정렬 후 두번째 값을 넣어준다.
  if (maxCounts.length > 1) {
    maxCounts = maxCounts.sort((a, b) => Number(a) - Number(b))
    result.push(maxCounts[1])
  } else {
    result.push(maxCounts[0])
  }

  //범위
  //  정렬된 값이므로 마지막 값과 처음 값의 차이를 구한다.
  result.push(sortedArray[sortedArray.length - 1] - sortedArray[0])

  console.log(result.join('\n'))
  process.exit()
})
