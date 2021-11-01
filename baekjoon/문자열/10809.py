S = input()
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
result = ''
for i in alphabets:
  num = ''
  for idx, j in enumerate(S):
    if i == j:
      num = idx
      break
  if num == '':
    result = result + '-1 '
  else:
    result = result + f'{num} '
print(result)