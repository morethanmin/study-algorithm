def getN(number):
  m = number
  sum = 0
  nmg = 0
  while m!=0:
    m,nmg = divmod(m, 10)
    sum = sum + nmg
  return number + sum

result = list(range(0,10001))
for i in range(10000):
  result[i+1]= 0

for i in range(10000):
  M = getN(i+1)
  if(M <= 10000):
    result[M]= 1

for i in range(10000):
  if result[i+1] == 0:
    print(i+1)