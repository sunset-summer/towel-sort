// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    let fMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (let k = 0; k < matrix[i].length; k++) {
                fMatrix.unshift(matrix[i][k]);
            } 
        } else {
            let temp = matrix[i].reverse();
            for (let j = 0; j < temp.length; j++) {
                fMatrix.unshift(temp[j]);
            } 
        }
    }
revertedMatrix = fMatrix.reverse();
return revertedMatrix;
}