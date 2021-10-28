def isHanSu(n):
  strN = str(n)
  if len(strN) == 1:
    return True
  else:
    chaSet = set()
    for i in range(len(strN) - 1):
      chaSet.add(int(strN[i]) - int(strN[i+1]))
    if len(list(chaSet)) == 1:
      return True
    else:
      return False

N = int(input())
count = 0
for i in range(N):
  if isHanSu(i+1):
    count = count + 1

print(count)