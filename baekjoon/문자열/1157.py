word = input().lower()
alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
counts = []
for iIdex, i in enumerate(alphabets):
  counts.append(0)
for iIdx, i in enumerate(word):
  for jIdx, j in enumerate(alphabets):
    if i == j:
      counts[jIdx] = counts[jIdx] + 1
max = max(counts)
maxone = 0
maxtwo = 0
result = 0
try:
  maxone = counts.index(max)
  maxtwo = counts.index(max,maxone+1)
except:
  result = alphabets[maxone].upper()
else:
  result = "?"
print(result)