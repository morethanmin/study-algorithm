const solve = (n, rgb) => {
  dp = [...new Array(n+1)].map(v => new Array(3).fill(0));
  dp[1] = rgb[0];
  for (let i=2; i<=n; i++) {
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + rgb[i-1][0];
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + rgb[i-1][1];
    dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + rgb[i-1][2];
  }
  console.log(Math.min(...dp[n]));
};

const [n, ...rgb] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
solve(+n, rgb.map(cost => cost.split(' ').map(v => +v)));