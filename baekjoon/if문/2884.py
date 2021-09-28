H, M = map(int,input().split())
calH = 0
calM = 0
if(M<45):
  calM = 60 - (45 - M)
  if(H == 0):
    calH = 23
  else:
    calH = H - 1
else:
  calM = M - 45
  calH = H
print(f"{calH} {calM}")