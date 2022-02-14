const solution = (n, rgb) => {

  // 다음과 같이 선언하게 되면 내부 값을 바꾸면 각각의 배열의 값이 모두 바뀌게 되므로 이렇게 선언하면 안된다.
  // new Array(n+1).fill(new Array(3).fill(0))
  const dp = [...new Array(n+1)].map(v => new Array(3).fill(0));

  // 초기 값 설정
  dp[1] = rgb[0];

  for (let i=2; i<=n; i++) {
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + rgb[i-1][0];
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + rgb[i-1][1];
    dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + rgb[i-1][2];
  }
  console.log(Math.min(...dp[n]));
};

//n개의 집과, 각각의 집을 red green blue로 칠하는 비용이들어있는 array인 rgb를 받아옴
const [n, ...rgb] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
solution(+n, rgb.map(cost => cost.split(' ').map(v => +v)));