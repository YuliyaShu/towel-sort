module.exports = function towelSort (matrix) {
  
  if (matrix === undefined || !matrix.length) {return [];} 
  let resultArray = [];
  for (i = 1; i <= matrix.length; i++) {
    for (j = 0; j < matrix[i - 1].length; j++) {
        (i % 2 !== 0) 
        ? resultArray.push(matrix[i - 1][j]) 
        : resultArray.push(matrix[i - 1][matrix[i - 1].length - j - 1]);
      }
    }
  return resultArray;
}
