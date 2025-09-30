function Materices(matrix){
   
    const target = matrix[0].reduce((a, b) => a + b, 0);

   
    for (let r = 1; r < matrix.length; r++) {
        const rowSum = matrix[r].reduce((a, b) => a + b, 0);
        if (rowSum !== target) return false;
    }

   
    const cols = matrix[0].length;
    for (let c = 0; c < cols; c++) {
        let colSum = 0;
        for (let r = 0; r < matrix.length; r++) {
            colSum += matrix[r][c];
        }
        if (colSum !== target) return false;
    }

    return true;
   
}
Materices([[4, 5, 3],

[6, 5, 4],

[5, 5, 5]])