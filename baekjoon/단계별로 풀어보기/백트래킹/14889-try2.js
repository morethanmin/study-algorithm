const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs = []

const solution = (arr) => {
  const N = arr.length
  const people = []
  for (let i = 0; i < N; i++) people.push(i)
  let START_TEAM = []
  let LINK_TEAM = []
  const visited = new Array(N).fill(false)
  let min = Number.MAX_SAFE_INTEGER

  function dfs(count, start) {
    if (count === N / 2) {
      LINK_TEAM = remainPeople(people, START_TEAM)
      const START_TEAM_POINT = calcTeamPoint(arr, START_TEAM)
      const LINK_TEAM_POINT = calcTeamPoint(arr, LINK_TEAM)
      min = min > Math.abs(START_TEAM_POINT - LINK_TEAM_POINT) ? Math.abs(START_TEAM_POINT - LINK_TEAM_POINT) : min;
      return
    }
    for (let i = start; i < N; i++) {
      if (visited[i]) continue
      visited[i] = true
      START_TEAM.push(i)
      dfs(count + 1, i)
      START_TEAM.pop()
      visited[i] = false
    }
  }
  function remainPeople(people, team) {
    let result = [];
    for (let i = 0; i < people.length; i++) {
      if (!team.includes(people[i])) result.push(people[i])
    }
    return result;
  }

  function calcTeamPoint(points, team) {
    let result = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        if (i === j) continue
        result += points[team[i]][team[j]]
      }
    }
    return result
  }

  dfs(0, 0)
  return min
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const N = +inputs.shift()
  const S = inputs.map((row) => row.split(' ').map((el) => +el))
  console.log(solution(S));
  process.exit()
})