const inputs =[1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

const getMode = (array) => {
  // 빈도 구하기
  const counts = array.reduce((pv, cv)=>{
    //pv[cv] 값이 없는 경우에는 0+1을 해주고 아닌 경우에는 pv[cv]+1을 해준다
    pv[cv] = (pv[cv] || 0) + 1;
    return pv
  },{})
  // 최빈값 구하기
  const keys = Object.keys(counts)
  let mode = keys[0]
  keys.forEach((val,idx)=>{
    if(counts[val]> counts[mode]) mode = val
  })

  return mode
}

console.log(getMode(inputs));