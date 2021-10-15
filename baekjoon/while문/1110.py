N = int(input())
count = 1
newN = 0

def getN(number):
  A = 0
  B = 0
  C = 0
  if len(f'{number}') > 1:
    A = int(f'{number}'[0])
    B = int(f'{number}'[1])
  else:
    A = int(f'{number}'[0])
    B = 0
  C = A + B
  return int(str(number % 10) + str(C % 10))

newN = getN(N)
while newN != N:
  count = count+1
  newN = getN(newN)
print(count)