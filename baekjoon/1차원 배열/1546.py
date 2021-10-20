N = int(input())
scores = list(map(int,input().split()))
max = max(scores)
newScores = []
for score in scores:
  newScores = newScores + [score/max * 100]
print(sum(newScores) / len(newScores))