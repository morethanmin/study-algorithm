const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

switch (input) {
  case 'A+':
    console.log('4.3')
    return
  case 'A0':
    console.log('4.0')
    return
  case 'A-':
    console.log('3.7')
    return
  case 'B+':
    console.log('3.3')
    return
  case 'B0':
    console.log('3.0')
    return
  case 'B-':
    console.log('2.7')
    return
  case 'C+':
    console.log('2.3')
    return
  case 'C0':
    console.log('2.0')
    return
  case 'C-':
    console.log('1.7')
    return
  case 'D+':
    console.log('1.3')
    return
  case 'D0':
    console.log('1.0')
    return
  case 'D-':
    console.log('0.7')
    return
  case 'F':
    console.log(`0.0`)
    return
}