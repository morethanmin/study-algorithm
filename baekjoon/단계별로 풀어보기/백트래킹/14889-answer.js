const fs = require('fs');
const readFileSyncAddress = '/dev/stdin';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// 인풋 처리
[N, ...arr] = input;
arr = arr.map(i => i.split(' ').map(i => Number(i)));
N = Number(N);
const people = [];
for (let i = 0; i < N; i++) people.push(i);

const START_TEAM = [];
let LINK_TEAM = [];
const visited = new Array(N).fill(false);
const answer = [];
let min = Number.MAX_SAFE_INTEGER;

function dfs(count, start) {
    if (count === N / 2) {
        LINK_TEAM = remainPeople(people, START_TEAM);
        const START_TEAM_POINT = calcTeamPoint(arr, START_TEAM);
        const LINK_TEAM_POINT = calcTeamPoint(arr, LINK_TEAM);
        min = min > Math.abs(START_TEAM_POINT - LINK_TEAM_POINT) ? Math.abs(START_TEAM_POINT - LINK_TEAM_POINT) : min;
        return;
    }

    for (let i = start; i < N; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        START_TEAM.push(i);
        dfs(count + 1, i);
        START_TEAM.pop();
        visited[i] = false;
    }
}

function remainPeople(people, team) {
    let result = [];
    for (let i = 0; i < people.length; i++) {
        if (!team.includes(people[i])) result.push(people[i]);
    }
    return result;
}

function calcTeamPoint(points, team) {
    let result = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = 0; j < team.length; j++) {
            if (i === j) continue;
            result += points[team[i]][team[j]];
        }
    }
    return result;
}

dfs(0, 0);

console.log(min);