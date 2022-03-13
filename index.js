const dimention = 5
let dx = 0
let dy = -1
let value = 0
const seqTotal = (2 * dimention - 2) / 2
let seqDigitsTotal = dimention
let seqNumber = 0
let seqSign = '-'

const matrix = []

// Do matrix nxn with initial values
for (let i = 0; i < dimention; i++) {
  matrix[i] = []
  for (let j = 0; j < dimention; j++) {
    matrix[i][j] = 0
  }
}

// Do first row (index 0)
for (let i = 0; i < dimention; i++) {
  dy += 1
  value += 1
  matrix[dx][dy] = value
}

// Find row and column numbers 
for (let i = 1; i <= seqTotal; i++) {
  seqSign = seqSign === '-' ? '+' : '-'
  seqDigitsTotal -= 1

  for (let i = 1; i <= 2; i++) {
    seqNumber += 1

    for (let i = 0; i < seqDigitsTotal; i++) {
      if (seqNumber % 2 != 0) {
        dx = seqSign === '+' ? dx + 1 : dx - 1
      } else {
        dy = seqSign === '+' ? dy - 1 : dy + 1
      }
      value += 1
      matrix[dx][dy] = value
    }
  }
}

console.log(matrix)