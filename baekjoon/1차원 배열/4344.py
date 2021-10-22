C = int(input())
for i in range(C):
  T = list(map(int,input().split()))
  N = T[0]
  scores = T[1:N+1]
  sum = 0
  for j in range(N):
    sum = sum + scores[j]
  avg = sum/N
  result = format(len(list(filter(lambda x: x>avg, scores)))/N * 100, ".3f")
  print(f"{result}%")
