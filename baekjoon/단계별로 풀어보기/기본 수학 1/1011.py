def getSum(n):
  return (n*(n+1))/2

T = int(input())
for i in range(T):
  x, y = map(int,input().split())
  distance = y-x
  moveAmount = 0
  count = 0

  while(distance != 0):
    if getSum(moveAmount+1) <= distance:
      moveAmount= moveAmount+1
      distance = distance- moveAmount
    elif getSum(moveAmount) <= distance:
      moveAmount = moveAmount
      distance = distance -moveAmount
    elif getSum(moveAmount-1) <= distance:
      moveAmount = moveAmount -1
      distance = distance - moveAmount
    count = count +1
  print(count)