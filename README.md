# SpiralMatrix

This is another implementation of the [spiral matrix](http://rosettacode.org/wiki/Spiral_matrix) based on a pattern I discovered while playing with it.

### Algorithm
Let's say we want to get a 5x5 (dimention) spiral matrix like this:

![spiralMatrix](https://github.com/victorizbitskiy/spiralMatrix/blob/main/docs/img/spiralMatrix_5x5.svg)

The elements of this matrix have the following coordinates:

![spiralMatrixCoordinates](https://github.com/victorizbitskiy/spiralMatrix/blob/main/docs/img/spiralMatrix_5x5_coordinates.svg)

If we represent the coordinates of rows (dy) and columns (dx) as a sequences of numbers, then we can notice a certain pattern.

![spiralMatrix](https://github.com/victorizbitskiy/spiralMatrix/blob/main/docs/img/spiralMatrix-5x5_table_.svg)

1. Total number of sequences = 2*dimention - 1.
2. The sequence dimention is repeated twice and then reduced by 1 (except for the first sequence).
3. The row coordinates (dy) for even sequences are incremented and then decremented by 1 (and so on). The row coordinates for odd sequences remain constant.
4. For column coordinates, the opposite is true.

This algorithm is implemented in the spiralMatrix() function.

### Usage
```javascript
    const sm = require('./spiralMatrix')
    
    const array = sm.spiralMatrix(dimention = 5, initialValue = 1)
    console.log(array)
```  
The result:
```javascript
[
  [ 1, 2, 3, 4, 5 ],    
  [ 16, 17, 18, 19, 6 ],
  [ 15, 24, 25, 20, 7 ],
  [ 14, 23, 22, 21, 8 ],
  [ 13, 12, 11, 10, 9 ] 
]
```


