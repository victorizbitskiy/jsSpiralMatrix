exports.spiralMatrix = function (dimention = 5, initialValue = 0) {
  let dy = 0
  let dx = 0
  let value = initialValue - 1
  const halfSeqTotal = (2 * dimention - 2) / 2
  let seqDimention = dimention
  let seqNumber = 0
  let signCoef = -1

  // Create the matrix nxn
  let n = dimention
  let matrix = []
  while (n) matrix[--n] = []

  // Fill in the first row (index 0)
  for (let i = 0; i < dimention; i++) {
    matrix[dy][dx++] = ++value
  }

  // Find the row and column numbers and set the values.
  dx--
  for (let i = 0; i < halfSeqTotal; i++) {
    signCoef = - signCoef
    seqDimention--
    for (let i = 0; i < 2; i++) {
      seqNumber++
      for (let i = 0; i < seqDimention; i++) {
        if (seqNumber % 2 != 0) {
          dy = dy + 1 * signCoef
        } else {
          dx = dx - 1 * signCoef
        }
        value++
        matrix[dy][dx] = value
      }
    }
  }
  return matrix
}


