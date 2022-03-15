exports.spiralMatrix = function (dimention = 5, initialValue = 0) {
  let dy = 0
  let dx = -1
  let value = initialValue - 1
  const seqTotal = (2 * dimention - 2) / 2
  let seqDimention = dimention
  let seqNumber = 0
  let seqSign = -1

  // Create the matrix nxn
  let n = dimention
  let matrix = []
  while (n) matrix[--n] = []

  // Fill in the first row (index 0)
  for (let i = 0; i < dimention; i++) {
    matrix[dy][++dx] = ++value
  }

  // Find the row and column numbers and set the values.
  for (let i = 1; i <= seqTotal; i++) {
    seqSign = -seqSign
    seqDimention--
    for (let i = 1; i <= 2; i++) {
      seqNumber++
      for (let i = 0; i < seqDimention; i++) {
        if (seqNumber % 2 != 0) {
          dy = dy + 1 * seqSign
        } else {
          dx = dx - 1 * seqSign
        }
        value++
        matrix[dy][dx] = value
      }
    }
  }
  return matrix
}


